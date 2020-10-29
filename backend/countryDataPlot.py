from matplotlib import pyplot as plt
from matplotlib.pyplot import plot
import numpy as np

from helpers import get_country_dictionary, get_cases, get_deaths
from constants import COLORS

# if plot all then call this many times
# if there are many countries and plot_type == bar, then call this multiple times

def plot_country_data(countries, plot = 'new cases', plot_type = 'line'):
    
    if not (isinstance(countries, list) or isinstance(countries, tuple)):
        raise TypeError("Please pass in a list/tuple of Country/Countries")
    
    # country comes in as a list
     
    plt.style.use('seaborn-colorblind')
    
    fig, (ax1) = plt.subplots(1,1, figsize=(10, 5))
    axes = [ax1]

    country_dictionary = get_country_dictionary(countries, plot)
    
    country_name = []
    country_data_x = []
    country_data_y = []
    maximum = { c : {} for c in countries }
    
    for country in countries:   
        dates = country_dictionary[country].index
        
        country_name.append(country)
        country_data_x.append(dates)
        
        
        if plot.lower() == "new cases":
            index = np.argmax(country_dictionary[country]['New_cases'])
            country_data_y.append(country_dictionary[country]['New_cases'])

            maximum[country]['New_cases'] = int(country_dictionary[country]['New_cases'][index])
            maximum[country]['Date'] = country_dictionary[country].index[index]
        
        elif plot.lower() == 'total cases':
            index = np.argmax(country_dictionary[country]['Cumulative_cases'])
            country_data_y.append(country_dictionary[country]['Cumulative_cases'])

            maximum[country]['Date']  = country_dictionary[country].index[index]
            maximum[country]['Cumulative_cases'] = int(country_dictionary[country]['Cumulative_cases'][index])
            
        elif plot.lower() == 'new deaths':
            index = np.argmax(country_dictionary[country]['New_deaths'])
            country_data_y.append(country_dictionary[country]['New_deaths'])

            maximum[country]['Date'] = country_dictionary[country].index[index]
            maximum[country]['New_deaths'] = int(country_dictionary[country]['New_deaths'][index])
            
        elif plot.lower() == 'total deaths':
            index = np.argmax(country_dictionary[country]['Cumulative_deaths'])
            country_data_y.append(country_dictionary[country]['Cumulative_deaths'])

            maximum[country]['Date'] = country_dictionary[country].index[index]
            maximum[country]['Cumulative_deaths'] = int(country_dictionary[country]['Cumulative_deaths'][index])
        
    
    colori = 0

    to_add = '/Day' if 'new' in plot else ''

    axes[0].set_title(f"{plot.split(' ')[0].upper()} COVID-19 {plot.split(' ')[1].upper()}{to_add}")

    axes[0].set_ylabel(plot.upper())
    axes[0].set_xlabel('Month of 2020')
    axes[0].tick_params(axis='x', rotation=35)

    for index, data in enumerate(country_data_x):
        if plot_type == 'line':
            axes[0].plot(
                country_data_x[index], 
                country_data_y[index], 
                label = country_name[index],
                color = COLORS[colori],
                alpha = 0.75
            )
        
        else:
            axes[0].bar(
                country_data_x[index], 
                country_data_y[index], 
                label = country_name[index],
                color = COLORS[colori],
                width = 1.0,
                edgecolor = 'white',
                align = 'center'
            )

        
        colori = 0 if (colori + 1 == len(COLORS)) else (colori + 1)


    axes[0].legend(loc = 'upper left')

    fig.tight_layout(pad = 3.0)

    return fig, maximum


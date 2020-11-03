from matplotlib import pyplot as plt
import numpy as np
import os

from data_processing.helpers import get_country_dictionary, get_cases, get_deaths
from data_processing.constants import COLORS

# if plot all then call this many times
# if there are many countries and plot_type == bar, then call this multiple times

def plot_country_data(fig, ax1, countries, plot = 'new_cases', plot_type = 'line'):
    if not (isinstance(countries, list) or isinstance(countries, tuple)):
        raise TypeError("Please pass in a list/tuple of Country/Countries")
    
    # country comes in as a list
    
    plt.style.use('seaborn-colorblind')
    
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
        
        
        if plot.lower() == "new_cases":
            index = np.argmax(country_dictionary[country]['New_cases'])
            country_data_y.append(country_dictionary[country]['New_cases'])

            maximum[country]['New_cases'] = int(country_dictionary[country]['New_cases'][index])
            maximum[country]['Date'] = country_dictionary[country].index[index]
        
        elif plot.lower() == 'total_cases':
            index = np.argmax(country_dictionary[country]['Cumulative_cases'])
            country_data_y.append(country_dictionary[country]['Cumulative_cases'])

            maximum[country]['Date']  = country_dictionary[country].index[index]
            maximum[country]['Cumulative_cases'] = int(country_dictionary[country]['Cumulative_cases'][index])
            
        elif plot.lower() == 'new_deaths':
            index = np.argmax(country_dictionary[country]['New_deaths'])
            country_data_y.append(country_dictionary[country]['New_deaths'])

            maximum[country]['Date'] = country_dictionary[country].index[index]
            maximum[country]['New_deaths'] = int(country_dictionary[country]['New_deaths'][index])
            
        elif plot.lower() == 'total_deaths':
            index = np.argmax(country_dictionary[country]['Cumulative_deaths'])
            country_data_y.append(country_dictionary[country]['Cumulative_deaths'])

            maximum[country]['Date'] = country_dictionary[country].index[index]
            maximum[country]['Cumulative_deaths'] = int(country_dictionary[country]['Cumulative_deaths'][index])
        
    
    colori = 0

    to_add = '/Day' if 'new' in plot else ''

    axes[0].set_title(f"{plot.split('_')[0].upper()} COVID-19 {plot.split('_')[1].upper()}{to_add}")

    axes[0].set_ylabel(plot.upper())
    axes[0].set_xlabel('Month of 2020')
    axes[0].tick_params(axis='x', rotation=35)

    for index, data in enumerate(country_data_x):
        if plot_type == 'line':
            axes[0].plot(
                country_data_x[index], 
                country_data_y[index], 
                label = country_name[index].upper(),
                color = COLORS[colori],
                alpha = 0.75
            )
        
        else:
            axes[0].bar(
                country_data_x[index], 
                country_data_y[index], 
                label = country_name[index].upper(),
                color = COLORS[colori],
                width = 1.0,
                edgecolor = 'white',
                align = 'center'
            )

        
        colori = 0 if (colori + 1 == len(COLORS)) else (colori + 1)


    axes[0].legend(loc = 'upper left')

    fig.tight_layout(pad = 3.0)

    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok=True)

    filepath = os.path.join(backend_dir, 'temp', f"{countries[0]}-{plot}.png")

    fig.savefig(filepath)

    # del fig, axes

    return filepath, maximum



def plot_all_data_for_a_country(fig, all_axes, country, plot_type = 'line'):
    if not isinstance(country, str):
        raise ValueError("Please input only one country as a string.")
    
    # the below variables are data frames
    
    new_cases = get_cases(country)['New_cases']
    total_cases = get_cases(country, how = 'Cumulative_cases')['Cumulative_cases']
    new_deaths = get_deaths(country)['New_deaths']
    total_deaths = get_deaths(country, how = 'Cumulative_deaths')['Cumulative_deaths']

    
    dates = [new_cases.index, total_cases.index, new_deaths.index, total_deaths.index]
    to_plot = [new_cases, total_cases, new_deaths, total_deaths]
    labels = ['New Cases / Day', 'Total Cases', 'New Deaths / Day', 'Total Deaths']

    
    ((ax1, ax2), (ax3, ax4)) = all_axes
        
    axes = [ax1, ax2, ax3, ax4]

    colori = 0

    for index, axis in enumerate(axes):
        axis.set_title(labels[index])
        axis.tick_params(axis='x', rotation=35)
        axis.set_xlabel("Month of 2020")
        y = labels[index].split('/')[0]
        axis.set_ylabel(y)
        
        if plot_type == 'line':
            axis.plot(dates[index], to_plot[index], color = COLORS[colori])
            
        if plot_type == 'bar':
            axis.bar(dates[index], to_plot[index], color = COLORS[colori], width = 0.75)
            
        colori = 0 if (colori + 1 == len(COLORS)) else (colori + 1)
    
    fig.tight_layout(pad = 3.0)

    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok=True)
    filepath = os.path.join(backend_dir, 'temp', f"{country}-all.png")
    fig.savefig(filepath)

    return filepath

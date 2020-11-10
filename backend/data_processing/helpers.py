import pandas as pd
import numpy as np
import os
from data_processing.continents_and_countries import mapping
from data_processing.constants import column_name

def get_df():
    data_path = os.path.dirname(os.path.dirname( os.path.abspath(__file__) ))
    df = pd.read_csv(os.path.join(data_path, 'data', 'WHO-COVID-19-global-data.csv'))

    df.columns = [i.strip() for i in df.columns]
    df.rename(columns={'Date_reported' : 'Date'}, inplace = True)

    df['Date'] = pd.to_datetime(df['Date'])
    df['Country'] = df['Country'].apply(lambda x: x.lower())

    return df

def get_country_df(country):
    df = get_df()
    country_groups = df.groupby('Country')
    country_df = country_groups.get_group(country)
    return country_df


def get_cases(country, how = 'New_cases'):
    country_df = get_country_df(country)
    country_df.set_index('Date', inplace = True)

    filt = country_df[how] >= 1

    country_df = country_df[filt]

    return country_df.loc[:, [how]]

def get_deaths(country, how = 'New_deaths'):
    country_df = get_country_df(country)
    country_df.set_index('Date', inplace = True)

    filt = country_df[how] >= 1

    country_df = country_df[filt]

    return country_df.loc[:, [how]]


def get_country_dictionary(countries, plot):
    country_dictionary = {}
    
    for country in countries:
        if plot.lower() == "new_cases":
            country_dictionary[country] = get_cases(country)
            
        
        elif plot.lower() == 'total_cases':
            country_dictionary[country] = get_cases(country, 'Cumulative_cases')
                
            
        elif plot.lower() == 'new_deaths':
            country_dictionary[country] = get_deaths(country)
            
            
        elif plot.lower() == 'total_deaths':
            country_dictionary[country] = get_deaths(country, 'Cumulative_deaths') 
                
       
    country_dictionary = {
        key: country_dictionary[key] 
        for key in sorted(country_dictionary, key = lambda k: len(country_dictionary[k]))
    }
    return country_dictionary


def get_sum_col(col = 'New_cases'):
    
    df = get_df()
    
    dates = df['Date'].unique()
    
    date_groups = df.groupby('Date')
    
    lst = []
    
    for date in dates:
        lst.append(date_groups.get_group(date)[col].sum())
        
    return np.array(dates), np.array(lst)



def get_continent_data(continent, plot = 'new_cases'):
    df = get_df()
    
    countries = df['Country']

    conts = [mapping[c] if c in mapping else 'NA' for c in countries]

    df['Continent'] = conts
        
    cont_df = df.groupby('Continent').get_group(continent)
    
    col = column_name[plot]
    
    lst = []
        
    dates = cont_df['Date'].unique()
    
    date_group = cont_df.groupby('Date')
    
    for date in dates:
        lst.append(date_group.get_group(date)[col].sum())
    
    return dates, lst
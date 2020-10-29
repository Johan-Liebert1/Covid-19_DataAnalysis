import pandas as pd

def get_country_df(country):
    df = pd.read_csv('data/WHO-COVID-19-global-data.csv')

    df.columns = [i.strip() for i in df.columns]
    df.rename(columns={'Date_reported' : 'Date'}, inplace = True)
    df['Date'] = pd.to_datetime(df['Date'])
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
    
    for i in countries:
        if plot.lower() == "new cases":
            country_dictionary[i] = get_cases(i)
            
        
        elif plot.lower() == 'total cases':
            country_dictionary[i] = get_cases(i, 'Cumulative_cases')
                
            
        elif plot.lower() == 'new deaths':
            country_dictionary[i] = get_deaths(i)
            
            
        elif plot.lower() == 'total deaths':
            country_dictionary[i] = get_deaths(i, 'Cumulative_deaths') 
                
       
    country_dictionary = {
        key: country_dictionary[key] 
        for key in sorted(country_dictionary, key = lambda k: len(country_dictionary[k]))
    }
        
    return country_dictionary

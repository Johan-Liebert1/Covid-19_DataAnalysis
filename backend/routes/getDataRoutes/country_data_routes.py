from flask import Blueprint
import numpy as np
import datetime

from data_processing.helpers import get_cases, get_deaths

country_data_routes = Blueprint('country_data_routes', __name__)

@country_data_routes.route('/<string:country>')
def country_data(country):
    
    new_cases    = get_cases(country = country, how = 'New_cases')
    total_cases  = get_cases(country = country, how = 'Cumulative_cases')
    new_deaths   = get_deaths(country = country, how = 'New_deaths')
    total_deaths = get_deaths(country = country, how = 'Cumulative_deaths')

    l = [new_cases, total_cases, new_deaths, total_deaths]
    key = ['new_cases', 'total_cases', 'new_deaths', 'total_deaths']

    dict_to_return = {}

    for index, stat in enumerate(l):
        max_index = np.argmax(stat)
        max_stat = stat.iloc[max_index].to_list()
        max_stat_date = datetime.datetime.date(stat.index[max_index])

        total = stat.sum().to_list()

        dict_to_return[key[index]] = {
            f'first_{key[index]}_date': stat.index[0] ,
            'total' : total,
            'maximum': max_stat,
            f'max_{key[index]}_date': max_stat_date
        }

    return dict_to_return

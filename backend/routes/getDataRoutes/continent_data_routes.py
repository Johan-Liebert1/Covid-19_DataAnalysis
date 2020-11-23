from flask import Blueprint
import numpy as np

from data_processing.helpers import get_continent_data

continent_data_routes = Blueprint('continent_data_routes', __name__)

@continent_data_routes.route('/<string:continent>')
def continent_data(continent):
    key = ['new_cases', 'total_cases', 'new_deaths', 'total_deaths']

    dict_to_return = {}

    for k in key:
        dates, stat = get_continent_data(continent, plot = k)

        stat = np.array(stat)
        max_index = np.argmax(stat)
        max_stat = int(stat[max_index])
        max_stat_date = str(dates[max_index]).split('T')[0]

        total = int(stat.sum())

        dict_to_return[k] = {
            f'first_{k}_date': str(dates[0]).split('T')[0],
            'total' : total,
            'maximum': max_stat,
            f'max_{k}_date': max_stat_date
        }

    return dict_to_return
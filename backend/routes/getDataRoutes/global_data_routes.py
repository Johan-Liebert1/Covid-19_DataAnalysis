from flask import Blueprint
import numpy as np

from data_processing.helpers import get_sum_col
from data_processing.constants import column_name

global_data_routes = Blueprint('global_data_routes', __name__)

@global_data_routes.route('/')
def global_data():
    key = ['new_cases', 'total_cases', 'new_deaths', 'total_deaths']

    dict_to_return = {}

    for k in key:
        dates, stat = get_sum_col(col = column_name[k])

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
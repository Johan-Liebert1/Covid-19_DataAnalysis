from flask import Blueprint, send_file, request
from os.path import dirname, abspath
from os.path import join as join_path
import os
import sys
import matplotlib as mpl
mpl.use('Agg') # non GUI backend

import matplotlib.pyplot as plt

# resolve ModuleNotFound error
sys.path.insert(0, (abspath(join_path('..', '..','..', 'backend'))) )

from data_processing.globalDataPlot import plot_global_data


global_plot_routes = Blueprint('global_plot_routes', __name__)


def delete_all_files_in_temp():
    backend_dir = abspath( dirname(dirname(dirname(__file__))) )
    temp_path = join_path(backend_dir, 'temp')

    for file in os.listdir(temp_path):
        os.remove(join_path(temp_path, file))


@global_plot_routes.route('/<string:data>/<string:plot_type>')
def global_plot(data, plot_type):
    delete_all_files_in_temp()
    
    if data != 'all':
        fig, axes = plt.subplots(1,1, figsize=(10, 5))

        filename = plot_global_data(
            fig = fig, 
            all_axes = axes,
            plot = data,
            plot_type = plot_type
        )
    
    else:
        fig, axes = plt.subplots(2,2, figsize=(20, 10))

        filename = plot_global_data(
            fig = fig, 
            all_axes = axes,
            plot = data,
            plot_type = plot_type,
            plot_all = True
        )

    return send_file(filename, mimetype='image/gif'), 200
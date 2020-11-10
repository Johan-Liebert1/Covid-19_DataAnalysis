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

from data_processing.continentDataPlot import plot_all_data_for_a_continent, compare_continent_data, plot_continent_data

continent_plot_routes = Blueprint('continent_plot_routes', __name__)


def delete_all_files_in_temp():
    backend_dir = abspath( dirname(dirname(dirname(__file__))) )
    temp_path = join_path(backend_dir, 'temp')

    for file in os.listdir(temp_path):
        if file.endswith('.png'):
            os.remove(join_path(temp_path, file))



@continent_plot_routes.route("/continent/<string:continent>/<string:data>/<string:plot_type>")
def continent_plot(continent, data, plot_type):
    delete_all_files_in_temp()

    if data == 'all':
        fig, axes = plt.subplots(2,2, figsize=(20, 10))

        filename = plot_all_data_for_a_continent(
            fig = fig, 
            all_axes = axes,
            continent = continent,
            plot_type = plot_type
        )

    else:
        fig, axes = plt.subplots(1,1, figsize = (10, 5))
        filename = plot_continent_data(
            fig,
            axes,
            continent = continent,
            plot = data,
            plot_type = plot_type
        )

    return send_file(filename, mimetype='image/gif')



# compare continents
@continent_plot_routes.route('/continents/<string:data>/<string:plot_type>')
def comapre_continents_plot(data, plot_type):
    delete_all_files_in_temp()

    continents = request.args.get('conts')
    cont_list = [i.lower() for i in continents.split(',')]

    # going to be at least 2 
    isEven = len(cont_list) % 2 == 0
    rows = len(cont_list) // 2 if isEven else ( len(cont_list) + 1 ) // 2
    fig_height = 5 * rows
    fig, axes = plt.subplots( rows , 2 , figsize=(20, fig_height))
    
    if len(cont_list) > 2:
        all_axes = []
        
        for r in range(rows):
            for c in range(2):
                all_axes.append( axes[r][c] )
        
        if not isEven:
            fig.delaxes(all_axes[-1])
    

        filename = compare_continent_data(
            fig = fig, 
            all_axes = all_axes,
            continents = cont_list,
            plot = data,
            plot_type = plot_type
        )
    
    else:
        filename = compare_continent_data(
            fig = fig, 
            all_axes = axes,
            continents = cont_list,
            plot = data,
            plot_type = plot_type
        )


    return send_file(filename, mimetype='image/gif'), 200


from flask import Flask
import mpld3
import json

from countryDataPlot import plot_country_data

app = Flask(__name__)

@app.route("/getdata/<string:country>/")
def return_data(country):
    figure, data = plot_country_data([country])
    return json.dumps({'image': mpld3.fig_to_dict(figure), 'data': data})

app.run(debug = True)
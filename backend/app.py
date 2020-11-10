from flask import Flask, send_from_directory
import os

from routes.plotRoutes.home import home_page
from routes.plotRoutes.country_plot_routes import country_plot_routes
from routes.plotRoutes.continent_plot_routes import continent_plot_routes
from routes.plotRoutes.global_plot_routes import global_plot_routes

from routes.getDataRoutes.country_data_routes import country_data_routes
from routes.getDataRoutes.continent_data_routes import continent_data_routes
from routes.getDataRoutes.global_data_routes import global_data_routes

build_dir = os.path.abspath(os.path.join(os.getcwd(), '..', 'frontend', 'build'))

app = Flask( __name__, static_folder = build_dir,  static_url_path = '/')
app.register_blueprint(home_page, url_prefix = '/api')


# plotting routes
app.register_blueprint(country_plot_routes, url_prefix = '/api/plotdata')
app.register_blueprint(continent_plot_routes, url_prefix = '/api/plotdata')
app.register_blueprint(global_plot_routes, url_prefix = '/api/plotdata/global')

# getting data routes
app.register_blueprint(country_data_routes, url_prefix = '/api/getdata/country')
app.register_blueprint(continent_data_routes, url_prefix = '/api/getdata/continent')
app.register_blueprint(global_data_routes, url_prefix = '/api/getdata/global')



# for deployment
@app.route('/')
def serve_index():
    os.makedirs('temp', exist_ok=True)
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(debug = True, threaded = True)
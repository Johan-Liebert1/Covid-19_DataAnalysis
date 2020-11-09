from flask import Flask

from routes.plotRoutes.home import home_page
from routes.plotRoutes.country_plot_routes import country_plot_routes
from routes.plotRoutes.continent_plot_routes import continent_plot_routes
from routes.plotRoutes.global_plot_routes import global_plot_routes

app = Flask(__name__)
app.register_blueprint(home_page, url_prefix = '/api')

# plotting routes
app.register_blueprint(country_plot_routes, url_prefix = '/api/plotdata')
app.register_blueprint(continent_plot_routes, url_prefix = '/api/plotdata')
app.register_blueprint(global_plot_routes, url_prefix = '/api/plotdata/global')

# getting data routes


@app.route('/getdata/')
def home():
    pass


if __name__ == "__main__":
    app.run(debug = True, threaded = True)
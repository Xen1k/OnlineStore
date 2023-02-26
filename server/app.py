from flask import Flask
from flask_cors import CORS
from products import products

app = Flask(__name__,  static_url_path='', static_folder='static')
app.register_blueprint(products, url_prefix="")
cors = CORS(app)

if __name__ == '__main__':
    app.run(debug=True, port=80)

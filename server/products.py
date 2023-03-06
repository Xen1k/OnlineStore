from flask import Blueprint, request
import sqlite3 as sq
from utils import *

products = Blueprint("product", __name__)


@products.route('/add-product', methods=['POST'])
def add_product():
    data = request.form
    with sq.connect('store.sqlite') as con:
        cur = con.cursor()
        cur.execute("""
            INSERT INTO PRODUCTS
            (name, price, category, shortDescription, fullDescription, id, mainImage)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, [data.get('name'), data.get('price'),
              data.get('category'), data.get('shortDescription'),
              data.get('fullDescription'), data.get('id'),
              save_file_and_get_random_name(request.files.get("mainImage"))])
        return '0'

@products.route('/get-product-by-id', methods=['POST'])
def get_product_by_id():
    data = convert_request_data_to_dict(request)
    with sq.connect('store.sqlite') as con:
        con.row_factory = dict_factory
        cur = con.cursor()
        cur.execute("""SELECT * FROM PRODUCTS WHERE id = ?""", [data])
        return cur.fetchone()

@products.route('/get-all-products', methods=['GET'])
def get_all_products():
    with sq.connect('store.sqlite') as con:
        con.row_factory = dict_factory
        cur = con.cursor()
        cur.execute("""SELECT * FROM PRODUCTS""")
        return cur.fetchall()


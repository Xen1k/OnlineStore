import os
import sqlite3 as sq

from random import randrange
import ast
import sys

def convert_request_data_to_dict(axios_data):
    return ast.literal_eval(next(iter(axios_data.form.to_dict())))

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def save_file_and_get_random_name(file):
    name = "{0}.jpg".format(randrange(sys.maxsize))
    file.save("static/{0}".format(name))
    return name

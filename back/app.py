from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

from modules.Search import Search
from modules.Item import Item

app = Flask(__name__)
#CORS(app, resources={r"/*": {"origins": "*"}})

data = {}

@app.route('/api/items', methods=['GET'])
def getItems():
    if request.method == 'GET' and request.args.get('q'):
        try:
            search = request.args.get('q')
            response = requests.get(f"https://api.mercadolibre.com/sites/MLA/search?q={search}").json()

            search = Search(response)
            response = search.getResult()

            return jsonify(response), 200

        except:
            return jsonify("error consultando el elemento"), 400
    
    return jsonify("bad request, ingrese elemento de busqueda"), 400

@app.route('/api/items/<id>', methods=['GET'])
def getItemById(id):
    try:
        item = requests.get(f"https://api.mercadolibre.com/items/{id}").json()
        description = requests.get(f"https://api.mercadolibre.com/items/{id}/description").json()

        item = Item(item, description)
        response = item.getItem()

        return jsonify(response), 200

    except:
        return jsonify("error consultando el item"), 400

if __name__ == "__main__":
    app.run(port=5000, debug=True, host="0.0.0.0")
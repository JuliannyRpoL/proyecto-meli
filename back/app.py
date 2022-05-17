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
            items = requests.get(f"https://api.mercadolibre.com/sites/MLA/search?q={search}").json()

            search = Search(items)

            if(len(search.category) == 0):
                category = search.getCategoryMostSearched()

                categoryInfo = requests.get(f"https://api.mercadolibre.com/categories/{category}").json()
                response = search.getResult(categoryInfo)
            else:
                response = search.getResult(search.category[0])

            return jsonify(response), 200

        except requests.exceptions.RequestException as e:  # This is the correct syntax
            raise print(e)
    
    return jsonify("bad request, ingrese elemento de busqueda"), 400

@app.route('/api/items/<id>', methods=['GET'])
def getItemById(id):
    try:
        item = requests.get(f"https://api.mercadolibre.com/items/{id}").json()
        description = requests.get(f"https://api.mercadolibre.com/items/{id}/description").json()

        item = Item(item, description)
        categoryInfo = requests.get(f"https://api.mercadolibre.com/categories/{item.category}").json()

        response = item.getItem(categoryInfo)

        return jsonify(response), 200

    except:
        error = {
            'message': "item no encontrado",
            'code': 400
        }
        return error, 400

if __name__ == "__main__":
    app.run(port=5000, debug=True, host="0.0.0.0")
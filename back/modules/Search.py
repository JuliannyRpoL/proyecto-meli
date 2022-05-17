from functools import reduce
import math

class Search():

    def __init__(self, response):
        self.response = response
        self.category = list(filter(self.isCategory, response["filters"]))

    def getResult(self, categoryInfo):
        items = self.getItems()

        categories = []
        if('error' not in categoryInfo):
            if('values' not in categoryInfo):
                categories = list(map(lambda category: category["name"], categoryInfo['path_from_root']))
            else:
                categories = list(map(lambda category: category["name"], categoryInfo['values'][0]['path_from_root']))

        responseShowed = {
            'author': {
                'name': 'Julianny',
                'lastname': 'Restrepo Lopez'
            },
            'categories': categories,
            'items': items
        }

        return responseShowed

    def getItems(self):
        results = self.response["results"]
        items = []
        for result in range(0, 4):
            decimals, amount = math.modf(results[result]['prices']['prices'][0]['amount'])
            item = {
                'id': results[result]['id'],
                'title': results[result]['title'],
                'price': {
                    'currency': results[result]['prices']['prices'][0]['currency_id'],
                    'amount': round(amount),
                    'decimals': round(decimals, 2)
                },
                "picture": results[result]['thumbnail'],
                "condition":  results[result]['condition'],
                "free_shipping": results[result]['shipping']['free_shipping'],
                "state": results[result]['address']['state_name']
            }
            items.append(item)

        return items

    def isCategory(self, filter):
        return True if filter["id"] == 'category' else False

    def getCategoryMostSearched(self):
        categories = list(filter(self.isCategory, self.response["available_filters"]))
        
        try:
            categoryMostSearched = reduce(
                lambda prevCategory, currentCategory: currentCategory if prevCategory['results'] < currentCategory['results'] else prevCategory,
                categories[0]['values']
            )['id']

            return categoryMostSearched
        except:
            return ""       
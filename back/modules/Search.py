from functools import reduce
import math

class Search():

    def __init__(self, response):
        self.response = response


    def getResult(self, categoryInfo):
        items = self.getItems()
        categories = list(map(lambda category: category["name"], categoryInfo['path_from_root']))

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
                "free_shipping": results[result]['shipping']['free_shipping']
            }
            items.append(item)

        return items

    def isCategory(self, filter):
        return True if filter["id"] == 'category' else False

    def getCategoryMostSearched(self):
        categories = list(filter(self.isCategory, self.response["available_filters"]))
        categoryMostSearched = reduce(
            lambda prevCategory, currentCategory: currentCategory if prevCategory['results'] < currentCategory['results'] else prevCategory,
            categories[0]['values']
        )['id']
        
        return categoryMostSearched
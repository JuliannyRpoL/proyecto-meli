import math


class Item:

    def __init__(self, item, description):
        self.item = item
        self.description = description
        self.category = item['category_id']

    def getItem(self, categoryInfo):
        decimals, amount = math.modf(self.item['price'])
        categories = list(map(lambda category: category["name"], categoryInfo['path_from_root']))

        response = {
            'author': {
                'name': 'Julianny',
                'lastname': 'Restrepo Lopez'
            },
            'item': {
                "id": self.item['id'],
                "title": self.item['title'],
                "price": {
                    "currency": self.item['currency_id'],
                    'amount': round(amount),
                    'decimals': round(decimals, 2)
                },
                'picture': self.item['pictures'][0]['url'],
                "condition": self.item['condition'],
                "free_shipping": self.item['shipping']['free_shipping'],
                "sold_quantity": self.item['sold_quantity'],
                "description": self.description['plain_text'],
                "categories": categories
            }
        }

        return response
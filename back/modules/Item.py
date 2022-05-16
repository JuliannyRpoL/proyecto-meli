import math


class Item:

    def __init__(self, item, description):
        self.item = item
        self.description = description

    def getItem(self):
        decimals, amount = math.modf(self.item['price'])
        pictures = list(map(lambda picture: picture["url"],  self.item['pictures']))

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
                'picture': pictures,
                "condition": self.item['condition'],
                "free_shipping": self.item['shipping']['free_shipping'],
                "sold_quantity": self.item['sold_quantity'],
                "description": self.description['plain_text']
            }
        }

        return response
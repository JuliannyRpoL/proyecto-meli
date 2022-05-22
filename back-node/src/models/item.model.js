export default class ItemModel {

    constructor() { }

    getResult(item, description, category){
        const price = item.price.toString().split('.');
        const amount = parseInt(price[0])
        const decimals = parseFloat(`0.${price[1]}`)

        const response = {
            author: {
                name: 'Julianny',
                lastname: 'Restrepo Lopez'
            },
            item: {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount,
                    decimals
                },
                picture: item.pictures[0].url,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description: description.plain_text,
                categories: category
            }
        }

        return response
    }        
}
             
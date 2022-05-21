export default class SearchItemsLayer {

    constructor(response) {
        this.response = response;
        this.category = response.filters.filter((filter) => filter.id === 'category');
    }

    getResult(categoryInfo) {
        const items = this.getItems()

        let categories = []
        if(Array.isArray(categoryInfo)){
            categories = categoryInfo
        } else {
            categories = categoryInfo.values[0].path_from_root.map((category) => category.name)
        }
            
        const responseShowed = {
            'author': {
                'name': 'Julianny',
                'lastname': 'Restrepo Lopez'
            },
            'categories': categories,
            'items': items
        }

        return responseShowed
    }

    getItems() {
        const results = this.response["results"]
        const items = []

        for(let i = 0; i < 4; i++){
            const price = results[i].prices.prices[0].amount.toString().split('.');
            const amount = parseInt(price[0])
            const decimals = parseFloat(`0.${price[1]}`)

            const item = {
                id: results[i].id,
                title: results[i].title,
                price: {
                    currency: results[i].prices.prices[0].currency_id,
                    amount,
                    decimals
                },
                picture: results[i].thumbnail,
                condition:  results[i].condition,
                free_shipping: results[i].shipping.free_shipping,
                state: results[i].address.state_name 
            }

            items.push(item)
        }

        return items
    }

    getCategoryMostSearched() {
        const categories = this.response.available_filters.filter((filter) => filter.id === 'category');
        
        try {
            const categoryMostSearched = categories[0].values.reduce((prevCategory, currentCategory) => {
                if( currentCategory.results > prevCategory.results ) {
                    return currentCategory
                } else {
                    return prevCategory
                }
            })

            return categoryMostSearched.id;
        } catch {
            return ""
        }
    }
}
             
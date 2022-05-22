export const checkGetItemDetails = function (req, res, next) {
    const id = req.params.id;
    try {
       if(typeof id !== 'string') {
            throw new Error('bad request, ingrese id del item');
       }
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

    next();
}

export const checkSearchedItems = function (req, res, next) {
    const query = req.query.q;
    try {
       if(typeof query !== 'string') {
            throw new Error('bad request, ingrese elemento de busqueda');
       }
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

    next();
}
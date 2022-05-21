import asyncHandler from 'express-async-handler'


const getSearchedItems = asyncHandler(async(req, res) => {
    console.log(req)

    // const book = await Book.findById(req.params.id)

    // if(book){
    //     res.json(book)
    // } else{
    //     res.status(404).json({message: 'Book Not Found'})
    // }

})


const getItemDetails = asyncHandler(async(req, res) => {
    console.log(req)

    // const books = await Book.find({})

    // res.json(books)

})

export { getSearchedItems, getItemDetails }
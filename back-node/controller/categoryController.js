import asyncHandler from 'express-async-handler'


const getCategoryInfo = asyncHandler(async(req, res) => {

    console.log(req)

    // const book = await Book.findById(req.params.id)

    // if(book){
    //     res.json(book)
    // } else{
    //     res.status(404).json({message: 'Book Not Found'})
    // }

})

export { getCategoryInfo }
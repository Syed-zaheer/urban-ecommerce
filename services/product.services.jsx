


export class ProductServices {

    static getAllProducts = async() => {
        const response = await  fetch("https://dummyjson.com/products").then((res) => res.json())
        console.log('GETALLPRODUCTS-======-', response.data)
        return response.data
    }

}
const products = [
    {id: 1, name: 'Walton Mobile', price: 22000},
    {id: 2, name: 'Walton Laptop', price: 22000},
    {id: 3, name: 'Apple Macbook Air Laptop', price: 22000},
    {id: 4, name: 'Lenovo Mobile', price: 22000},
    {id: 5, name: 'Dell Laptop', price: 22000},
    {id: 6, name: 'HP Laptop', price: 22000},
    {id: 7, name: 'iphone', price: 22000},
    {id: 8, name: 'Asus laptop', price: 22000},
    {id: 9, name: 'Oneplus Mobile', price: 22000},
    {id: 10, name: 'Sony Viayo Laptop', price: 22000},
    {id: 11, name: 'Xiaomi Laptop', price: 22000},
    {id: 12, name: 'Xiaomi Mobile', price: 22000},
    {id: 13, name: 'DCL Laptop', price: 22000},
]


function getProduct(products, keyword){
    const matched = []
    for (const product of products) {
        if(product.name.toLowerCase().includes(keyword.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}


const item = getProduct(products, "Laptop")
console.log(item)
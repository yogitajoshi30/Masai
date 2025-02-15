let products=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(products){
    let names= products.map(product=> product.name);
    console.log(names);
    products.forEach((product)=> {
        if(product.price>50){
            console.log(`${product.name} is above 50$`);
        }else{
            console.log(`${product.name} is below 50$`)
        }
    });

}
processProducts(products);
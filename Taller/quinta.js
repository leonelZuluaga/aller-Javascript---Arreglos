let products = [
    {
        id_product: 1,
        product_name: "Camiseta",
        product_price: 50000,
        product_quantity: 89 
    },
    {
        id_product: 2,
        product_name: "Pantalón",
        product_price: 90000,
        product_quantity: 44
    },
    {
        id_product: 3,
        product_name: "Chaqueta",
        product_price: 160000,
        product_quantity: 23 
    },
    {
        id_product: 4,
        product_name: "Correa",
        product_price: 80000,
        product_quantity: 104 
    }
];

const quinta = products.filter(product => product.product_price > 70000 && product.product_quantity < 100)
    .map(product => ({...product,product_tax_value: product.product_price * 0.19,
        product_total_value: product.product_price + product.product_price * 0.19
    }));

console.log(quinta);

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
]


//PRIMERA PREGUNTA DEL TALLER
const resultado = products.reduce((acumulador, product) => {
    return {
        precioTotal: acumulador.precioTotal + product.product_price,
        cantidad: acumulador.cantidad + product.product_quantity,
    };
}, {
    precioTotal: 0,
    cantidad: 0,
});


//SEGUNDA PREGUNTA DEL TALLER
const ProductoMasCaro = [...products].sort((a, b) => b.product_price - a.product_price)[0].product_name;

const r = {
    ...resultado,
    ProductoMasCaro: ProductoMasCaro
};

console.log(r);

  
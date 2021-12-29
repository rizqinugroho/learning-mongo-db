//digunakan untuk insert satu document kedalam mongodb
db.customers.insertOne({
    _id:1,
    first_name:"Rizqi",
    last_name:"Nugroho"
});

//digunakan untuk insert many document kedalam mongodb
db.products.insertMany([
    {
        _id: 1,
        name: "Permen Coklat",
        price: new NumberLong(2000)
    },
    {
        _id: 2,
        name: "Permen Karet",
        price: new NumberLong(2000)
    }
]);

// Insert document orders
db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            quantity: new NumberInt(2),
            customerId: 1
        },
        {
            product_id: 2,
            quantity: new NumberInt(2),
            customerId: 2
        }
    ]
})

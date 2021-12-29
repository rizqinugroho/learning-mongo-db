//this example of one to one linked document
db.customers.insertOne({
    _id:4,
    first_name:"Boby",
    last_name:"Cahya",
    address:"Jakarta Timur",
    gender:"Male"

});



db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        }
    ],
    customers_id:4
});

db.orders.find({
        customers_id:4});

//query to get order from bobby
db.orders.aggregate(
    [{
        $lookup: {
          from: "customers",
          localField: "customers_id",
          foreignField: "_id",
          as: "customer"
        }
    }
    ]
);
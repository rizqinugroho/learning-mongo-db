//this example of one to one embedded document
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
    customers:{
        name:"Iwan Banaran",
        address:"Depok"
    }
});

//query to get order from iwan banaran
db.orders.find(
    {
        "customers.name":{
            $eq:"Iwan Banaran"
        }
    }
);
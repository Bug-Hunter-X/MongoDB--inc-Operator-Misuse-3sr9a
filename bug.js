```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6523997165451234")},{$inc:{field: 'value'}});
```
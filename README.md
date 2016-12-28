#Seafret - Minimal CLI parser

#Example

```js

const Seafret = require('seafret');
const otter = new Seafret('2.0.0');

otter
.option('-go', 'Tells the Program to Run')
.option('-food', 'Tells the program to get food')
.send(process.argv)

if(otter.food) {
  console.log("daym")
}
```
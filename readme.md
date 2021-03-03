# Coding Challenge 03/03/21

## Instructions

**Part 0:**
Fork this repo and clone it down to your machine.

**Part 1:**
Create a function that creates a filtered JSON file from the equipment list array
Your JSON file should be an array of objects where each object looks like this.

```JSON
{
"name": "Canon EOS 5D Mark IV",
"category": "Camera / Camera Body",
"image": "https://static.bhphoto.com/images/images500x500/1515104479000_1274705.jpg"
},
```

```JS
const fs = require('fs');
const equipmentList = require('./equipmentList');

const filteredData = (arr) => {
//Your Code Here
};
```

**Part 2: **
Write your filtered Data to the File System with the FS module

**References**

- https://stackoverflow.com/questions/42179037/writing-json-object-to-a-json-file-with-fs-writefilesync

`fs.writeFileSync(filename, data);`

Extra bonus points if you can create a pull request with your solution

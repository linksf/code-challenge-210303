//Instructions:
// Create a function that creates a filtered JSON File from the equipment list array
// Your JSON file should be an array of objects where each object looks like this.

// {
//     "name": "Canon EOS 5D Mark IV",
//     "category": "Camera / Camera Body",
//     "image": "https://static.bhphoto.com/images/images500x500/1515104479000_1274705.jpg"
//   },

const fs = require('fs');
const equipmentList = require('./equipmentList');

const filteredData = (arr) => {
	//Your Code Here
};

//Write your Data to the File System
//https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
//https://stackoverflow.com/questions/42179037/writing-json-object-to-a-json-file-with-fs-writefilesync

fs.writeFileSync(filename, data);

//Extra bonus points if you can create a pull request with your solution

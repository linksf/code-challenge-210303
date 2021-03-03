const fs = require('fs');
const { stringify } = require('querystring');
const equipmentList = require('./equipmentList');

const filteredData = (arr) => {
	return JSON.stringify(arr.map(item=>({
		name: `${item.itemMake} ${item.itemModel}`, 
		category: item.itemCategory, 
		image: item.itemImageURL
	})))
};

fs.writeFileSync("test.JSON", filteredData(equipmentList));

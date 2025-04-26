const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname);

// console.log(__dirname);
// console.log(dirPath);

// for(let i=0; i<5; i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`, "A simple txt file is created");
// }

const filePath = `${dirPath}/files/hello0.txt`

fs.readFile(`${filePath}`, 'utf8', (err, item) => {
    console.log(item);
})
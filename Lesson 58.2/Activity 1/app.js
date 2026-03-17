const fs = require('fs');

fs.writeFile('example.txt', 'New content goes here', (err) => {
  if (err) throw err;
  console.log('File content replaced successfully');
});
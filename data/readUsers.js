const fs = require('fs');

// Read users from the JSON file in the 'data' folder
fs.readFile('data/guvi.users.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const users = JSON.parse(data);

  // Log the users array
  console.log(users);
});

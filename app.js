const request = require('request');
const cron = require('node-cron');

const websites = [
    'https://littlebrandbox.com',
    'https://nordikbeauty.com',
    'https://minoxidil.co.za',
    'https://biovea.co.za'
  ];

function pingWebsites() {
  websites.forEach(function(website) {
    request(website, function(error, response, body) {
      if (error) {
        console.log(`${website} is down!`);
      } else {
        console.log(`${website} is up!`);
      }
    });
  });
}

cron.schedule('*/2 * * * *', function() {
  pingWebsites();
});

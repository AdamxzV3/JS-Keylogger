const webhookUrl = "YOURWEBHOOK";

setInterval(() => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', webhookUrl);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    embeds: [{
      title: ":lock: Anti-Keylogger",
      description: ":white_check_mark: Keylogging has been stopped.",
      color: 65280
    }]
  }));
}, 5000);

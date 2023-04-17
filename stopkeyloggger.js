const webhookUrl = "https://discord.com/api/webhooks/1094331646980915331/gdrAU0urAk-yQQELETlgX0zMdKqGr2OgMzGzAXIuBpreyE4da2fnxsE6ZwbuKs1M0qQM";

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

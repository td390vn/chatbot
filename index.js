var login = require("facebook-chat-api");
// Create simple echo bot
login({email: "tduong390", password: "13112000xyz"}, function callback (err, api) {
    if(err) return console.error(err);
    api.listen(function callback(err, message) {
        api.sendMessage("Chào chế, mình đang bận, nói chuyện sau đê!", message.threadID);
    });
});
const {axiosInstance} = require("./axios")
const { text } = require("express");

function sendMessage(messageObj, messageText){
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj?.chat?.id,
        text: messageText,
    });
}

function handleMessage(messageObj){
    const messageText = messageObj?.text || "";
    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                //we want to send a welcome message to the user
                return sendMessage(
                    messageObj,
                    "Hi, I'm a bot, I can help you to get started"
                );
            default:
                return sendMessage(messageObj, "Hey hi, i don't know that command")
        }




    } else {
        //we can send same message back  to the user
        return sendMessage(messageObj, messageText);
    }
}

module.exports = { handleMessage};
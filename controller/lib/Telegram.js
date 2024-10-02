const { text } = require("express");

function sendMessage(messageObj, messageText){
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}

function handleMessage(messageObj){
    const messageText = messageObj.text || "";
    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
    } else {
        //we can send same message back  to the user
        return sendMessage(messageObj, messageText);
    }
}
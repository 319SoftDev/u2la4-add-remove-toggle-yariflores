const heading = document.querySelector("#heading");

const changeFontColor = () => {
    heading.classList.toggle("blue-text"); 
}
heading.addEventListener("click",changeFontColor);


//  Subheading

const subheading = document.querySelector("#subheading");

const changeColor = () => {
    subheading.classList.toggle("blue-text");

}
subheading.addEventListener("click", changeColor);

// ReplyButton & ReplyMessage 

const replyButton= document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");

const openReplyMessage = () => {
    replyMessage.classList.remove("hidden");
}

replyButton.addEventListener("click", openReplyMessage);


// Send and cancel button hide text box (add hidden)

const sendButton = document.querySelector("#send-button");
const cancelButton = document.querySelector("#cancel-buttonn");
console.log(sendButton,cancelButton);
const closeReplyMessage = () => {
    replyMessage.classList.add("hidden");
}

sendButton.addEventListener("click", closeReplyMessage);
cancelButton.addEventListener("click", closeReplyMessage);

// Open Button 

const openButton = document.querySelector("#open-button");
const inBoxMessage = document.querySelector("#inbox-message");
const markbutton = document.querySelector("#mark-button");
const inBox = document.querySelector("#inbox");

// open the message and show the "Mark as Unread" button
const openMessage = () => {
    inBoxMessage.classList.remove("hidden");  
    markbutton.classList.remove("hidden");   
    inBox.classList.add("is-read");
};

// the "Open" button
openButton.addEventListener("click", openMessage);



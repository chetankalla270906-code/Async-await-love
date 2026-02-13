document.addEventListener("DOMContentLoaded", () => {

  // 🔹 USER DATA
  const users = {
    Farhan: ["Hello","I am Farhan","What's your name"],
    Chetan: ["Hello","I am Chetan","what's up"],
    Aditya: ["Hello", "How are you"],
    Siddhesh: ["Will you be my valentine","What's up"],
    Ritik: ["Will you be my valentine","How are you"]
  };

  

  let currentUser = "Farhan";

  // 🔹 SELECT ELEMENTS
  const input = document.querySelector(".chat-input input");
  const btn = document.querySelector(".chat-input button");
  const chat = document.querySelector(".chat-messages");
  const chatHeader = document.querySelector(".chat-header h3");
  const userElements = document.querySelectorAll(".chat-user");

  const chatInputBox = document.querySelector(".chat-input");


  // 🔹 SWITCH USER
//   userElements.forEach(user => {
//     user.addEventListener("click", () => {
//       currentUser = user.innerText.trim();
//       chatHeader.innerText = currentUser;
//       chat.innerHTML = "";
//     });
//   });

userElements.forEach(user => {
  user.addEventListener("click", () => {
    currentUser = user.innerText.trim();
    chatHeader.innerText = currentUser;

    chat.innerHTML = "";                 // clear "Select Chat"
    chat.style.alignItems = "flex-start";
    chat.style.justifyContent = "flex-start";

    chatInputBox.style.display = "flex"; // 👈 SHOW INPUT
  });
});


  // 🔹 SEND MESSAGE
  btn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    // SENT MSG
    const sent = document.createElement("div");
    sent.className = "msg sent";
    sent.innerText = input.value;
    chat.appendChild(sent);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;

    // AUTO REPLY
    setTimeout(() => {
      const replies = users[currentUser];
      const reply =
        replies[Math.floor(Math.random() * replies.length)];

      const received = document.createElement("div");
      received.className = "msg received";
      received.innerText = reply;

      chat.appendChild(received);
      chat.scrollTop = chat.scrollHeight;
    }, 900);
  });

});


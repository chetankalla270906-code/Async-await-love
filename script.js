document.body.style.backgroundColor="pink";


const profiles = [
  { id: 1, name: "Aditya ", age: 19, img:"Aditya.jpeg" },
  { id: 2, name: "Chetan", age:18,  img: "chetan.jpeg"},
  { id: 3, name: "Prince", age: 18, img: "prince.jpeg" },
  { id: 4, name: "Ritik", age: 19,  img: "Ritik.jpeg" },
  { id: 5, name: "Siddhesh", age: 18,  img: "siddhesh.jpeg" },
  { id: 6, name: "Farhan", age: 19,  img: "farhan.jpeg" },
  { id: 7, name: "Harsh", age: 18,  img: "Harsh.jpeg" },
  { id: 8, name: "Raunit", age: 18,  img: "Raunit.jpeg" },
  { id: 9, name: "Yash", age: 19,  img: "yash.jpeg" },
  { id: 10, name: "Shivam", age: 18,  img: "shivam.jpeg" },
  { id: 11, name: "Parth", age: 19,  img: "parth.jpeg" },
  { id: 12, name: "Ritika", age: 18,  img: "parikshit.jpeg" },
];

// let head= document.head;
let container = document.createElement("div");
container.style.display = "flex"; 
container.style.flexWrap = "wrap"; 
container.style.justifyContent = "center"; 
container.style.gap = "30px";  
container.style.backgroundColor="#FFF0F5";
// container.style.marginTop="50px";
document.body.appendChild(container);

profiles.forEach(profil=>{
    let box=document.createElement("div");
    box.style.marginTop="30px";
    box.style.height="auto";
    // box.style.height="auto";
    box.style.width="300px";
    box.style.backgroundColor="#FFDDE1 ";
    box.style.borderRadius = "10px";
    box.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    box.style.overflow="hidden";
    box.style.textAlign="center";
    box.style.display="flex";
    box.style.flexDirection="column";
    // box.style.justifyContent="flex-start";
    box.style.gap="8px";
    box.style.alignItems="center";
    box.style.flexDirection="column";

    container.appendChild(box);

    let img=document.createElement("img");
    img.src=profil.img;
    img.style.width="90%";
    img.style.height="250px";
    // img.style.display="block";
    // img.style.display="cover";
    img.style.marginBottom="3px";
    img.style.marginLeft="2px";
    img.style.objectFit="cover";
    box.appendChild(img);

//   let img = document.createElement("img");
// img.src = profil.img;

// img.style.width = "100%";        // take full width
// img.style.height = "250px";      // fixed height
// img.style.objectFit = "cover";   // crop + fill
// img.style.display = "block";    // remove inline gaps
// img.style.marginBottom="3px";
// img.style.marginLeft="2px";
// box.appendChild(img);


    let info=document.createElement("div");
    info.style.padding = "10px";
    box.appendChild(info);

    let name=document.createElement("h2");
    name.innerHTML= `${profil.name}, ${profil.age}`;
    name.style.marginTop="2px";
    info.appendChild(name);

    let know_box=document.createElement("button");
    know_box.style.marginBottom="10px";
    know_box.style.width = "200px";
    know_box.style.height = "50px";

    know_box.style.padding = "14px 28px";
    know_box.style.fontSize = "16px";
    know_box.style.borderRadius = "8px";
    know_box.style.fontWeight = "600";
    know_box.style.cursor = "pointer";
    // know_box.style.display="flex";


    box.appendChild(know_box);


    let more=document.createElement("h3");
    more.innerHTML=("Know More");
    know_box.appendChild(more);

    let like=document.createElement("i");
    like.className = "fa-solid fa-heart";

    like.style.color = "#fff";
    like.style.fontSize = "22px";
    like.style.cursor = "pointer";
    like.style.position = "absolute";
    like.style.top = "10px";
    like.style.right = "10px";
    
    box.style.position = "relative";
    box.appendChild(like);

    // let game=document.createElement("i");
    //  game.className = "fa-solid fa-heart";

    //  game.style.color = "#fff";
    //  game.style.fontSize = "22px";
    //  game.style.cursor = "pointer";
    //  game.style.position = "absolute";
    //  game.style.top = "10px";
    //  game.style.right = "10px";
    
    // box.style.position = "relative";
    // box.appendChild( game);




    let msg=document.createElement("div");
    msg.style.fontSize="25px";
    msg.style.color="red";
    // msg.style.backgroundColor = "#000";

    box.style.position = "relative";

    box.appendChild(msg);

    let liked=false;

    like.addEventListener("click",()=>{

      msg.style.display="block";   //shows every time the msg
      if(liked){
        msg.innerHTML=` You disliked ${profil.name}`;
        
      }
      else{
        msg.innerHTML=` You liked ${profil.name}`;
      }
      setTimeout(()=>{
        msg.style.display="none";
      },1500)
    })
     


    like.addEventListener("click",()=>{

      if(!liked){
        like.style.color="red";
        
        liked=true;
      }
      else{
        like.style.color="white";
        liked=false;
      }

      like.style.transform = "scale(1.4)";
      like.style.transition = "transform 0.15s ease";

      setTimeout(() => {
        like.style.transform = "scale(1)";
      }, 150);

      })

      know_box.addEventListener("click", () => {
        window.location.href = `profile.html?id=${profil.id}`;
      });

});


let msg_box=document.querySelector(".msg");
msg_box.addEventListener("click", () => {
  window.location.href = "msg.html";
});

let nav_cart=document.querySelector(".nav-cart");
nav_cart.addEventListener("click", () => {
  window.location.href = "Createprofile.html";
});

let spacer = document.createElement("div");
spacer.style.height = "40px";
spacer.style.backgroundColor = "#FFF0F5";
document.body.appendChild(spacer);

// let lg=document.createElement("div");
// lg.style.paddingTop="30px
// lg.style.height="90px";
// lg.style.backgroundColor="black";
// let header=document.querySelector("header");
// // container.after(lg);
// document.body.appendChild(lg);

// let fotimg=document.createElement("img");
// fotimg.src="logo.jpg";
// fotimg.style.height="100px";
// fotimg.style.width="40px";
// fotimg.style.objectFit="contain";
// lg.appendChild(fotimg);
 

let lg = document.createElement("div");
lg.style.height = "60px";
lg.style.backgroundColor = "black";
lg.style.display = "flex";
lg.style.alignItems = "center";
lg.style.justifyContent = "center";
lg.style.overflow = "hidden";   // safety

document.body.appendChild(lg);

let fotimg = document.createElement("img");
fotimg.src = "logo.jpg";
fotimg.style.maxHeight = "100%";   // 🔑 key line
fotimg.style.maxWidth = "100%";
fotimg.style.objectFit = "contain";

lg.appendChild(fotimg);

let spacer2 = document.createElement("div");
spacer2.style.height = "30px";
spacer2.style.backgroundColor = "#FFF0F5";
document.body.appendChild(spacer2);


// ===== FOOTER =====
let footer = document.createElement("footer");

footer.style.backgroundColor = "#111";
footer.style.color = "#fff";
footer.style.padding = "30px 20px";
footer.style.textAlign = "center";
footer.style.fontFamily = "Arial, sans-serif";

// Quote
let quote = document.createElement("p");
quote.innerText = "“Every profile tells a story.”";
quote.style.fontSize = "18px";
quote.style.marginBottom = "12px";
quote.style.fontStyle = "italic";

// About text
let about = document.createElement("p");
about.innerText =
  "Async Await Love is a simple platform to explore profiles, connect with people, and share moments.";
about.style.fontSize = "14px";
about.style.opacity = "0.8";
about.style.maxWidth = "600px";
about.style.margin = "0 auto 15px";

// Divider
let line = document.createElement("div");
line.style.width = "60px";
line.style.height = "2px";
line.style.backgroundColor = "#ff4d6d";
line.style.margin = "15px auto";

// Copyright
let copyright = document.createElement("p");
copyright.innerHTML =
  `© 2026 <strong>Async Await Love</strong> | Made with ❤️ by <strong>Chetan</strong>`;
copyright.style.fontSize = "13px";
copyright.style.opacity = "0.7";

// Append
footer.appendChild(quote);
footer.appendChild(line);
footer.appendChild(about);
footer.appendChild(copyright);

document.body.appendChild(footer);

let play=document.querySelector(".play");
play.addEventListener("click", () => {
  window.location.href = "playgames.html";
});
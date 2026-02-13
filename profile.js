// document.title = `${profile.name} | Async Await Love`;

 

let header=document.querySelector("header");
header.style.backgroundImage=("url('profile_background.jpg')");
header.style.backgroundSize="cover";
header.style.height="80vh";
// header.style.display="flex";
// header.style.alignItems="center"; 
// header.style.backgroundRepeat="no-repeat";


header.style.minHeight = "90vh";
header.style.background =
  "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url('profile_background.jpg')";
header.style.backgroundSize = "cover";
header.style.backgroundPosition = "center";
header.style.padding = "60px 80px";
header.style.position = "relative";
header.style.backdropFilter = "blur(6px)";


let nav = document.createElement("nav");
// nav.style.display = "flex";
// nav.style.gap = "35px";
// nav.style.color = "white";
nav.style.display = "flex";
nav.style.gap = "35px";
nav.style.position = "absolute";
nav.style.top = "30px";
nav.style.right = "80px";
nav.style.background = "rgba(255,255,255,0.15)";
nav.style.backdropFilter = "blur(10px)";
nav.style.padding = "15px 30px";
nav.style.borderRadius = "40px";






let space=document.createElement("div");
space.innerText="";
space.style.width="75%";
nav.appendChild(space);

let about = document.createElement("span");
about.innerText = "About";
about.style.color="black";

let skills = document.createElement("span");
skills.innerText = "Skills ";
skills.style.color="black";


let proposal = document.createElement("span");
proposal.innerText = "Proposal";
proposal.style.color="black";


about.style.fontSize = "28px";
about.style.fontWeight = "600";
about.style.cursor = "pointer";

skills.style.fontSize = "28px";
skills.style.fontWeight = "600";
skills.style.cursor = "pointer";

proposal.style.fontSize = "28px";
proposal.style.fontWeight = "600";
proposal.style.cursor = "pointer";

nav.appendChild(about);
nav.appendChild(skills);
nav.appendChild(proposal);


let items = [about, skills, proposal];

// items.forEach(item => {
//   item.style.cursor = "pointer";
//   item.style.transition = "all 0.2s ease";

//   item.addEventListener("mouseenter", () => {
//     item.style.color = "#ff4d4d";
//     item.style.transform = "scale(1.1)";
//   });

//   item.addEventListener("mouseleave", () => {
//     item.style.color = "black";
//     item.style.transform = "scale(1)";
//   });
// });

header.appendChild(nav);

items.forEach(item => {
  item.style.color = "white";
  item.style.fontSize = "22px";
  item.style.fontWeight = "600";
  item.style.cursor = "pointer";
  item.style.transition = "all 0.3s ease";

  item.addEventListener("mouseenter", () => {
    item.style.color = "#ff4d4d";
    item.style.transform = "scale(1.15)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.color = "white";
    item.style.transform = "scale(1)";
  });
});



 
const profiles = [
  {
    id: 1,
    name: "Aditya",
    age: 36,
    img: "Aditya.jpeg",
    skills: [
      { title: "Romantic Creativity", desc: "Creating meaningful moments through thoughtful gestures and small surprises." },
      { title: "Communication Skills", desc: "Open, honest, and thoughtful communication—whether it’s deep talks or late-night chats." },
      { title: "Cook", desc: "cook's better than women" },
      { title: "Loyalty & Trustworthiness", desc:  "Committed, dependable, and honest. Trust is always my top priority." }
    ]
  },
  {
    id: 2,
    name: "Chetan",
    age: 18,
    img: "chetan.jpeg",
    skills: [
      { title:"Forgiveness & Understanding", desc:"Letting go of ego and choosing love over misunderstandings."},
      { title: "Honest Communication", desc: "Expressing thoughts and emotions clearly, kindly, and respectfully." },
      { title: "Loyalty & Commitment", desc: "Staying faithful, consistent, and emotionally present in the relationship." },
      { title: "Gentle Care", desc: "Offering comfort, warmth, and support when it matters most." }
    ]
  },
  
  { id: 3, name: "Prince", age: 18, img: "prince.jpeg",
    skills:[
      {title:"loyality",desc:"Staying faithful, consistent, and emotionally present in the relationship."},
      {title:"Forgiveness & Understanding",desc:"Letting go of ego and choosing love over misunderstandings."},
      {title:"Gentle Care",desc:"Offering comfort, warmth, and support when it matters most."},
      {title:"Emotional Safety",desc:"Creating a space where love feels secure, peaceful, and real."}
    ]
   }, 
  { id: 4, name: "Ritik", age: 19, img: "ritik.jpeg",
    skills:[
      {title:"Growing Together",desc:"Dreaming, learning, and building a future side by side."},
      {title:"Forgiveness & Understanding",desc:"Letting go of ego and choosing love over misunderstandings."},
      {title:"Affectionate Nature",desc:"Expressing love through smiles, words, and meaningful closeness."},
      {title:"Emotional Safety",desc:"Creating a space where love feels secure, peaceful, and real."}

    ]
   },
  { id: 5, name: "Siddhesh", age: 19, img: "siddhesh.jpeg",
    skills:[
      {title:"Gentle Care",desc:"Offering comfort, warmth, and support when it matters most."},
      {title:"Loyalty & Trustworthiness",desc:"Committed, dependable, and honest. Trust is always my top priority."},
      {title:"Cook",desc:"cook's better than women"},
      {title:"Loyalty & Commitment",desc:"Staying faithful, consistent, and emotionally present in the relationship."}
    ]
  },
  { id: 6, name: "Farhan", age: 19, img: "farhan.jpeg",
    skills:[
      { title: "Romantic Creativity", desc: "Creating meaningful moments through thoughtful gestures and small surprises." },
      { title: "Communication Skills", desc: "Open, honest, and thoughtful communication—whether it’s deep talks or late-night chats." },
      { title: "Cook", desc: "cook's better than women" },
      { title: "Loyalty & Trustworthiness", desc:  "Committed, dependable, and honest. Trust is always my top priority." }
    ]
  },
  { id: 7, name: "Harsh", age: 19, img: "harsh.jpeg",
    skills:[
      { title: "Romantic Creativity", desc: "Creating meaningful moments through thoughtful gestures and small surprises." },
      { title: "Communication Skills", desc: "Open, honest, and thoughtful communication—whether it’s deep talks or late-night chats." },
      { title: "Cook", desc: "cook's better than women" },
      { title: "Loyalty & Trustworthiness", desc:  "Committed, dependable, and honest. Trust is always my top priority." }
    ]
  },
  { id: 8, name: "Raunit", age: 19, img: "raunit.jpeg",
    skills:[
      {title:"Growing Together",desc:"Dreaming, learning, and building a future side by side."},
      {title:"Forgiveness & Understanding",desc:"Letting go of ego and choosing love over misunderstandings."},
      {title:"Affectionate Nature",desc:"Expressing love through smiles, words, and meaningful closeness."},
      {title:"Emotional Safety",desc:"Creating a space where love feels secure, peaceful, and real."}

    ]
  },
  { id: 9, name: "Yash", age: 19, img: "yash.jpeg",
    skills:[
      {title:"Gentle Care",desc:"Offering comfort, warmth, and support when it matters most."},
      {title:"Loyalty & Trustworthiness",desc:"Committed, dependable, and honest. Trust is always my top priority."},
      {title:"Cook",desc:"cook's better than women"},
      {title:"Loyalty & Commitment",desc:"Staying faithful, consistent, and emotionally present in the relationship."}
   
    ]
  },
  { id: 10, name: "Shivam", age: 18, img: "shivam.jpeg",
    skills:[
      { title:"Forgiveness & Understanding", desc:"Letting go of ego and choosing love over misunderstandings."},
      { title: "Honest Communication", desc: "Expressing thoughts and emotions clearly, kindly, and respectfully." },
      { title: "Loyalty & Commitment", desc: "Staying faithful, consistent, and emotionally present in the relationship." },
      { title: "Gentle Care", desc: "Offering comfort, warmth, and support when it matters most." }
    ]
  },
  { id: 11, name: "Parth", age: 19, img: "parth.jpeg",
    skills:[
      {title:"Growing Together",desc:"Dreaming, learning, and building a future side by side."},
      {title:"Forgiveness & Understanding",desc:"Letting go of ego and choosing love over misunderstandings."},
      {title:"Affectionate Nature",desc:"Expressing love through smiles, words, and meaningful closeness."},
      {title:"Emotional Safety",desc:"Creating a space where love feels secure, peaceful, and real."}

    ]
  },
  { id: 12, name: "Ritika", age: 19, img: "parikshit.jpeg",
    skills:[
      {title:"Gentle Care",desc:"Offering comfort, warmth, and support when it matters most."},
      {title:"Loyalty & Trustworthiness",desc:"Committed, dependable, and honest. Trust is always my top priority."},
      {title:"Cook",desc:"cook's better than women"},
      {title:"Loyalty & Commitment",desc:"Staying faithful, consistent, and emotionally present in the relationship."}
   
    ]
  },
];


// 🔹 Step 2: read id from URL
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// 🔹 Step 3: find matching profile
const profile = profiles.find(p => p.id === id);

// 🔹 Step 4: get header (or create it)
// let header = document.querySelector("header");
if (!header) {
  header = document.createElement("header");
  document.body.prepend(header);
}

// 🔹 Step 5: if profile missing → show message (NO crash)
if (!profile) {
  header.innerText = "Profile not found";
  header.style.color = "red";
  header.style.fontSize = "30px";
} else {

  // 🔹 Step 6: style header
  header.style.minHeight = "60vh";
  // header.style.background = "#111";
  header.style.padding = "40px";

  // 🔹 Step 7: name
  const name = document.createElement("h1");
  // name.style.marginTop=("200px");
  // name.style.marginLeft=("60px"); 
  name.innerText=`Hi I'm ${profile.name}`;

  name.style.marginTop = "200px";
name.style.marginLeft = "60px";
name.style.fontSize = "52px";
name.style.fontWeight = "700";
name.style.color = "white";
name.style.animation = "fadeUp 2.2s ease";

  let wel=document.createElement("p");
  wel.innerText="Welcome to my profile";

  name.appendChild(wel);

  let nice=document.createElement("p");
  nice.innerText=`Fair warning: this profile comes with honesty, warmth, and a little romance.`;
  nice.style.fontSize="22px";
  name.appendChild(nice);
  name.style.color = "white";
  name.style.fontSize = "42px";
  name.style.background =
  "linear-gradient(90deg, #ff4d4d, #ff9a9e, #ffffff)";
name.style.webkitBackgroundClip = "text";
name.style.webkitTextFillColor = "transparent";
name.style.position = "relative";
name.style.marginTop = "200px";




  // 🔹 Step 8: image
  const img = document.createElement("img");
  img.src = profile.img;
  // img.style.marginLeft="1000px";
  // img.style.width = "350px";
  // img.style.height="450px";
  // img.style.marginTop = "-250px";

  img.style.width = "350px";
  img.style.height = "450px";
  img.style.marginLeft = "1000px";
  img.style.marginTop = "-300px";
  img.style.borderRadius = "25px";
  img.style.boxShadow = "0 30px 60px rgba(0,0,0,0.6)";
  img.style.transition = "all 0.5s ease";
  img.style.animation = "floatSlow 4s ease-in-out infinite";


  img.addEventListener("mouseenter", () => {
    img.style.transform = "translateY(-15px) scale(1.05)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "translateY(0) scale(1)"; 
  });


  header.appendChild(name);
  header.appendChild(img);
}

let main=document.querySelector("main");

let bc=document.createElement("div");
bc.style.height="60vh";
// bc.style.backgroundColor="#f5c518";
// bc.style.backgroundColor="white";
main.appendChild(bc);

let text=document.createElement("div");
// text.innerText="Skills";
text.fontSize="20px";

bc.appendChild(text);


 

const skillsContainer = document.createElement("div");
skillsContainer.style.display = "flex";
skillsContainer.style.gap = "30px";
skillsContainer.style.padding = "60px";
skillsContainer.style.flexWrap = "wrap";
skillsContainer.style.backgroundColor="white";
skillsContainer.style.justifyContent = "center";


bc.appendChild(skillsContainer);

// ===== Skills / Why Me Heading =====
const skillsHeading = document.createElement("h1");
skillsHeading.innerText = "Why Me 💝";
skillsHeading.style.textAlign = "center";
skillsHeading.style.fontSize = "48px";
skillsHeading.style.marginBottom = "40px";
skillsHeading.style.color = "white";
skillsHeading.style.fontWeight = "700";
skillsHeading.style.letterSpacing = "1px";
skillsHeading.style.background =
  "linear-gradient(90deg, #ff9a9e, #fad0c4)";
skillsHeading.style.webkitBackgroundClip = "text";
skillsHeading.style.webkitTextFillColor = "transparent";

// Append heading before skills container
bc.appendChild(skillsHeading);


 


function createSkillBox(titleText, descText) {
  const box = document.createElement("div");

  box.style.width = "230px";
  box.style.height = "160px";
  box.style.background = "#111";
  box.style.backgroundColor="black";
  box.style.color = "gold";
  box.style.borderRadius = "16px";
  box.style.padding = "20px";
  box.style.cursor = "pointer";
  box.style.transition = "all 0.3s ease";
  box.style.overflow = "hidden";
  box.style.height="300px";
  box.style.width="300px";
  box.style.background = "rgba(31, 18, 18, 0.08)";
  box.style.backdropFilter = "blur(10px)";
  box.style.boxShadow = "0 15px 40px rgba(0,0,0,0.5)";
  box.style.border = "1px solid rgba(255,255,255,0.15)";

  box.style.position = "relative";
  box.style.boxShadow =
  "0 0 20px rgba(255,255,255,0.05), inset 0 0 10px rgba(255,255,255,0.05)";


  box.addEventListener("mouseenter", () => {
  box.style.transform = "translateY(-15px) scale(1.12)";
  box.style.background = "#ff4d4d";
  box.style.boxShadow = "0 20px 50px rgba(255,77,77,0.6)";
  
  box.addEventListener("mouseenter", () => {
    box.style.border = "1px solid rgba(255,255,255,0.6)";
  });
  box.addEventListener("mouseleave", () => {
    box.style.border = "1px solid rgba(255,255,255,0.15)";
  });
  
});

  const title = document.createElement("h3");
  title.innerText = titleText;

  const short = document.createElement("p");
  short.innerText = "";
  short.style.opacity = "0.6";

  const full = document.createElement("p");
  full.innerText = descText;
  full.style.fontSize = "16px";
  full.style.marginTop = "12px";
  full.style.display = "none";

  box.appendChild(title);
  box.appendChild(short);
  box.appendChild(full);

  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.1)";
    box.style.background = "#ff4d4d";
    short.style.display = "none";
    full.style.display = "block";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
    box.style.background = "#111";
    short.style.display = "block";
    full.style.display = "none";
  });

  return box;
}

// 🔹 Render skills for current profile
if (profile && profile.skills) {
  profile.skills.forEach(skill => {
    const box = createSkillBox(skill.title, skill.desc);
    skillsContainer.appendChild(box);
  });
} else {
  skillsContainer.innerText = "No skills available";
  skillsContainer.style.color = "white";
}

// let why=document.createElement("div");
// why.style.height="80vh";
// why.style.backgroundColor="black";
// why.style.display="flex";
// why.style.innerText="why should u pick me";
// why.style.color="white";
// main.appendChild(why);

// ===================== WHY PICK ME SECTION =====================
const why = document.createElement("section");
why.style.minHeight = "80vh";
why.style.background =
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
why.style.padding = "80px 60px";
why.style.color = "white";
why.style.textAlign = "center";

// Title
const whyTitle = document.createElement("h1");
whyTitle.innerText = "Why Should You Pick Me?";
whyTitle.style.fontSize = "48px";
whyTitle.style.marginBottom = "60px";
whyTitle.style.background =
  "linear-gradient(90deg, #ff4d4d, #ff9a9e)";
whyTitle.style.webkitBackgroundClip = "text";
whyTitle.style.webkitTextFillColor = "transparent";

why.appendChild(whyTitle);

// Cards container
const whyGrid = document.createElement("div");
whyGrid.style.display = "grid";
whyGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(240px, 1fr))";
whyGrid.style.gap = "40px";
whyGrid.style.maxWidth = "1100px";
whyGrid.style.margin = "auto";

why.appendChild(whyGrid);

// Reasons data
const reasons = [
  {
    icon: "🤍",
    title: "Chosen Every Day",
    desc: "Once I choose you, I choose you every day—without doubt or games."
  },
  {
    icon: "🌹",
    title: "Romance in the Little Things",
    desc: "I believe romance lives in small gestures, not just big moments."
  },
  {
    icon: "🫶",
    title: "Your Safe Place",
    desc: "I will be your safe place—your support, your calm, your home."
  },
  {
    icon: "💖",
    title: "Reliable & Loyal",
    desc: "Once I commit, I give my 100%. Consistency and honesty define me."
  }
];

// Create cards
reasons.forEach(reason => {
  const card = document.createElement("div");
  card.style.background = "rgba(255,255,255,0.08)";
  card.style.backdropFilter = "blur(14px)";
  card.style.borderRadius = "22px";
  card.style.padding = "35px 25px";
  card.style.border = "1px solid rgba(255,255,255,0.2)";
  card.style.boxShadow = "0 25px 60px rgba(0,0,0,0.6)";
  card.style.transition = "all 0.4s ease";
  card.style.cursor = "pointer";

  // Icon
  const icon = document.createElement("div");
  icon.innerText = reason.icon;
  icon.style.fontSize = "48px";
  icon.style.marginBottom = "20px";

  // Title
  const h3 = document.createElement("h3");
  h3.innerText = reason.title;
  h3.style.fontSize = "24px";
  h3.style.marginBottom = "15px";

  // Description
  const p = document.createElement("p");
  p.innerText = reason.desc;
  p.style.opacity = "0.85";
  p.style.lineHeight = "1.6";

  card.appendChild(icon);
  card.appendChild(h3);
  card.appendChild(p);

  // Hover effect
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-18px) scale(1.05)";
    card.style.boxShadow = "0 35px 80px rgba(255,77,77,0.7)";
    card.style.border = "1px solid rgba(255,77,77,0.8)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 25px 60px rgba(0,0,0,0.6)";
    card.style.border = "1px solid rgba(255,255,255,0.2)";
  });

  whyGrid.appendChild(card);
});

// Append section
main.appendChild(why);





// // Proposal Section
// const proposalSection = document.createElement("div");
// proposalSection.style.height = "50vh";
// // proposalSection.style.background = " linear-gradient(120deg, #ff758c, #ff7eb3)";
// // proposalSection.style.backgroundColor="white";
// proposalSection.style.background = "#f5c518";
// proposalSection.style.display = "flex";
// proposalSection.style.flexDirection = "column";
// proposalSection.style.justifyContent = "center";
// proposalSection.style.alignItems = "center";
// proposalSection.style.color = "white";
// proposalSection.style.position = "relative";
// proposalSection.style.background =
//   "linear-gradient(120deg, #ff758c, #ff7eb3)";
// proposalSection.style.textAlign = "center";


// const question = document.createElement("h1");
// question.innerText = "Will you be mine? ";
// question.style.marginBottom = "40px";

// const btnContainer = document.createElement("div");
// btnContainer.style.position = "relative";
// btnContainer.style.width = "400px";
// btnContainer.style.height = "200px";
// btnContainer.style.display="block";
// btnContainer.style.justifyContent="center"
 

// // YES button
// const yesBtn = document.createElement("button");
// yesBtn.innerText = "YES 💍";
// yesBtn.style.padding = "15px 30px";
// yesBtn.style.fontSize = "20px";
// yesBtn.style.borderRadius = "30px";
// yesBtn.style.border = "none";
// yesBtn.style.cursor = "pointer";
// yesBtn.style.background = "#ff4d4d";
// yesBtn.style.color = "white";
// yesBtn.style.marginRight = "40px";
// yesBtn.style.boxShadow = "0 0 20px rgba(255,77,77,0.8)";
// yesBtn.style.animation = "pulse 1.5s infinite";

// // yesBtn.style.marginRight="50px"

// // yesBtn.addEventListener("click", () => {
// //   alert("Yayyy 💖 I knew it!!! 🥰");
// // });
// // 💌 Love message
// const loveMsg = document.createElement("p");
// loveMsg.innerText = "Yayyy ,I knew it! You just made my day ";
// loveMsg.style.marginTop = "30px";
// loveMsg.style.fontSize = "24px";
// loveMsg.style.color = "#ff4d4d";
// loveMsg.style.opacity = "0";
// loveMsg.style.transition = "opacity 0.6s ease";

// proposalSection.appendChild(loveMsg);

// // YES click → show text
// yesBtn.addEventListener("click", () => {
//   loveMsg.style.opacity = "1";

// });

// // NO button
// const noBtn = document.createElement("button");
// noBtn.innerText = "NO ";
// noBtn.style.padding = "15px 30px";
// noBtn.style.fontSize = "20px";
// noBtn.style.borderRadius = "30px";
// noBtn.style.border = "none";
// noBtn.style.cursor = "pointer";
// noBtn.style.position = "absolute";
// noBtn.style.left = "200px";
// noBtn.style.top = "80px";
// noBtn.style.background = "white";
// noBtn.style.color = "black";
// noBtn.style.marginTop="-75px"

// // 🏃‍♂️ Run away on hover
// noBtn.addEventListener("mouseenter", () => {
//   const maxX = btnContainer.clientWidth - noBtn.offsetWidth;
//   const maxY = btnContainer.clientHeight - noBtn.offsetHeight;

//   const randomX = Math.random() * maxX;
//   const randomY = Math.random() * maxY;

//   noBtn.style.left = `${randomX}px`;
//   noBtn.style.top = `${randomY}px`;
// });

// // Append
// btnContainer.appendChild(yesBtn);
// btnContainer.appendChild(noBtn);

// proposalSection.appendChild(question);
// proposalSection.appendChild(btnContainer);
// main.appendChild(proposalSection);


// bc.classList.add("reveal");
// proposalSection.classList.add("reveal");

// window.addEventListener("scroll", () => {
//   document.querySelectorAll(".reveal").forEach(el => {
//     const top = el.getBoundingClientRect().top;
//     if (top < window.innerHeight - 100) {
//       el.classList.add("active");
//     }
//   });
// });

// proposalSection.style.boxShadow =
//   "inset 0 0 60px rgba(255,255,255,0.2)";

//   yesBtn.addEventListener("mouseenter", () => {
//   yesBtn.style.boxShadow =
//     "0 0 30px rgba(255,255,255,0.9)";
// });
// yesBtn.addEventListener("mouseleave", () => {
//   yesBtn.style.boxShadow =
//     "0 0 20px rgba(255,77,77,0.8)";
// });



// // ===================== PROPOSAL SECTION =====================
// const proposalSection = document.createElement("div");
// proposalSection.style.height = "70vh";
// proposalSection.style.display = "flex";
// proposalSection.style.flexDirection = "column";
// proposalSection.style.justifyContent = "center";
// proposalSection.style.alignItems = "center";
// proposalSection.style.position = "relative";
// proposalSection.style.textAlign = "center";
// proposalSection.style.background =
//   "linear-gradient(135deg, #ff416c, #ff4b2b)";
// proposalSection.style.overflow = "hidden";
// proposalSection.style.boxShadow =
//   "inset 0 0 80px rgba(255,255,255,0.25)";
//   // 💎 Glass card container
// proposalSection.style.borderRadius = "30px";
// proposalSection.style.padding = "40px";
// proposalSection.style.backdropFilter = "blur(10px)";
// proposalSection.style.border = "3px solid rgba(255,255,255,0.3)";
// proposalSection.style.animation = "glowBorder 3s infinite alternate";


// // 💖 Floating hearts background
// for (let i = 0; i < 10; i++) {
//   const heart = document.createElement("i");
//   heart.className = "fa-solid fa-heart";
//   heart.style.position = "absolute";
//   heart.style.color = "rgba(255,255,255,0.25)";
//   heart.style.fontSize = `${20 + Math.random() * 30}px`;
//   heart.style.left = Math.random() * 100 + "%";
//   heart.style.top = Math.random() * 100 + "%";
//   heart.style.animation = `floatHeart ${6 + Math.random() * 6}s infinite`;
//   proposalSection.appendChild(heart);
// }

// // Question
// const question = document.createElement("h1");
// question.innerText = "Will you be mine? 💖";
// question.style.fontSize = "52px";
// question.style.marginBottom = "40px";
// question.style.textShadow = "0 10px 30px rgba(0,0,0,0.4)";
// question.style.animation = "heartbeat 1.8s infinite";
// question.style.letterSpacing = "2px";


// // Buttons container
// const btnContainer = document.createElement("div");
// btnContainer.style.position = "relative";
// btnContainer.style.width = "420px";
// btnContainer.style.height = "200px";

// // YES Button
// const yesBtn = document.createElement("button");
// yesBtn.innerText = "YES 💍";
// yesBtn.style.padding = "18px 45px";
// yesBtn.style.fontSize = "22px";
// yesBtn.style.borderRadius = "40px";
// yesBtn.style.border = "none";
// yesBtn.style.cursor = "pointer";
// yesBtn.style.background = "white";
// yesBtn.style.color = "#ff416c";
// yesBtn.style.fontWeight = "700";
// yesBtn.style.boxShadow = "0 0 30px rgba(255,255,255,0.8)";
// yesBtn.style.animation = "pulse 1.5s infinite";


// // Love message
// const loveMsg = document.createElement("p");
// loveMsg.innerText = "Yayyy 💖 You just made my day!";
// loveMsg.style.marginTop = "30px";
// loveMsg.style.fontSize = "28px";
// loveMsg.style.opacity = "0";
// loveMsg.style.transition = "all 0.6s ease";
// loveMsg.style.textShadow = "0 5px 20px rgba(0,0,0,0.4)";

// yesBtn.addEventListener("click", () => {
//   loveMsg.style.opacity = "1";
//   yesBtn.style.transform = "scale(1.2)";

//   for (let i = 0; i < 30; i++) {
//   const confetti = document.createElement("span");
//   confetti.innerText = "💖";
//   confetti.style.position = "absolute";
//   confetti.style.left = Math.random() * 100 + "%";
//   confetti.style.top = "50%";
//   confetti.style.fontSize = "20px";
//   confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s ease-out`;
//   proposalSection.appendChild(confetti);

//   setTimeout(() => confetti.remove(), 4000);
// }
// for (let i = 0; i < 15; i++) {
//   const spark = document.createElement("span");
//   spark.innerText = "✨";
//   spark.style.position = "absolute";
//   spark.style.left = Math.random() * 100 + "%";
//   spark.style.top = Math.random() * 100 + "%";
//   spark.style.fontSize = "18px";
//   spark.style.opacity = "0.4";
//   spark.style.animation = `sparkle ${5 + Math.random() * 5}s infinite`;
//   proposalSection.appendChild(spark);


//   // Hide buttons smoothly
// btnContainer.style.opacity = "0";
// btnContainer.style.transform = "scale(0.8)";
// btnContainer.style.transition = "all 0.6s ease";

// // Blur background
// proposalSection.style.filter = "blur(1.5px)";

// // Romantic message card
// const msgCard = document.createElement("div");
// msgCard.style.position = "absolute";
// msgCard.style.top = "50%";
// msgCard.style.left = "50%";
// msgCard.style.transform = "translate(-50%, -50%) scale(0.7)";
// msgCard.style.background = "rgba(255,255,255,0.95)";
// msgCard.style.padding = "40px 50px";
// msgCard.style.borderRadius = "25px";
// msgCard.style.textAlign = "center";
// msgCard.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
// msgCard.style.opacity = "0";
// msgCard.style.transition = "all 0.8s ease";
// msgCard.style.zIndex = "10";

// // Message text
// const msgTitle = document.createElement("h2");
// msgTitle.innerText = "💖 It's Official!";
// msgTitle.style.fontSize = "36px";
// msgTitle.style.color = "#ff416c";
// msgTitle.style.marginBottom = "15px";

// const msgText = document.createElement("p");
// msgText.innerText = "You just made my heart the happiest 💕";
// msgText.style.fontSize = "22px";
// msgText.style.color = "#333";

// // Heart animation
// const msgHeart = document.createElement("div");
// msgHeart.innerText = "💘";
// msgHeart.style.fontSize = "50px";
// msgHeart.style.marginTop = "20px";
// msgHeart.style.animation = "heartbeat 1.5s infinite";

// // Append
// msgCard.appendChild(msgTitle);
// msgCard.appendChild(msgText);
// msgCard.appendChild(msgHeart);
// proposalSection.appendChild(msgCard);

// // Reveal animation
// setTimeout(() => {
//   msgCard.style.opacity = "1";
//   msgCard.style.transform = "translate(-50%, -50%) scale(1)";
// }, 100);

// }

// });

// // NO Button
// const noBtn = document.createElement("button");
// noBtn.innerText = "NO 🙈";
// noBtn.style.padding = "15px 35px";
// noBtn.style.fontSize = "20px";
// noBtn.style.borderRadius = "40px";
// noBtn.style.border = "none";
// noBtn.style.cursor = "pointer";
// noBtn.style.position = "absolute";
// noBtn.style.left = "200px";
// noBtn.style.top = "90px";
// noBtn.style.background = "rgba(255,255,255,0.9)";
// noBtn.style.color = "#111";

// // Run away
// noBtn.addEventListener("mouseenter", () => {
//   const maxX = btnContainer.clientWidth - noBtn.offsetWidth;
//   const maxY = btnContainer.clientHeight - noBtn.offsetHeight;
//   noBtn.style.left = Math.random() * maxX + "px";
//   noBtn.style.top = Math.random() * maxY + "px";
// });

// // Append
// btnContainer.appendChild(yesBtn);
// btnContainer.appendChild(noBtn);

// proposalSection.appendChild(question);
// proposalSection.appendChild(btnContainer);
// proposalSection.appendChild(loveMsg);
// main.appendChild(proposalSection);




// // DEFAULT STATE
// header.style.display = "block";     // Profile ALWAYS visible
// bc.style.display = "block";         // Skills visible
// // proposalSection.style.display = "none"; // Proposal hidden


// // SKILLS CLICK
// skills.addEventListener("click", () => {
//   // Profile stays
//   header.style.display = "block";

//   // Toggle sections
//   bc.style.display = "block";
//   // proposalSection.style.display = "none";

//   bc.scrollIntoView({ behavior: "smooth" });
// });

// // PROPOSAL CLICK
// proposal.addEventListener("click", () => {
//   // Profile stays
//   header.style.display = "block";

//   // Toggle sections
//   // bc.style.display = "none";
//   proposalSection.style.display = "flex";

//   proposalSection.scrollIntoView({ behavior: "smooth" });
// });

// // ABOUT CLICK → Only scroll to profile
// about.addEventListener("click", () => {
//   header.scrollIntoView({ behavior: "smooth" });
// });



// ===================== VALENTINE PROPOSAL (FINAL) =====================
const proposalSection = document.createElement("section");
proposalSection.style.height = "70vh";
proposalSection.style.display = "flex";
proposalSection.style.flexDirection = "column";
proposalSection.style.justifyContent = "center";
proposalSection.style.alignItems = "center";
proposalSection.style.textAlign = "center";
proposalSection.style.position = "relative";
proposalSection.style.background =
  "linear-gradient(135deg, #ff416c, #ff4b2b)";
proposalSection.style.borderRadius = "30px";
proposalSection.style.margin = "60px";
proposalSection.style.color = "white";
proposalSection.style.overflow = "hidden";
proposalSection.style.boxShadow =
  "0 25px 70px rgba(0,0,0,0.6)";

// 💕 Floating hearts
for (let i = 0; i < 14; i++) {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = Math.random() * 100 + "%";
  heart.style.fontSize = `${18 + Math.random() * 28}px`;
  heart.style.opacity = "0.4";
  heart.style.animation = `floatSlow ${5 + Math.random() * 6}s infinite`;
  proposalSection.appendChild(heart);
}

// 💌 Question
const question = document.createElement("h1");
question.innerText = "Is this the start of something special? 💘";
question.style.fontSize = "48px";
question.style.marginBottom = "20px";
question.style.textShadow = "0 8px 30px rgba(0,0,0,0.4)";
question.style.letterSpacing = "1px";

// 💬 Confession line
const confession = document.createElement("p");
confession.innerText =
  "I don’t know where this leads, but I’d love to find out with you.";
confession.style.fontSize = "22px";
confession.style.opacity = "0.9";
confession.style.marginBottom = "45px";

// 🔘 Buttons container
const btnContainer = document.createElement("div");
btnContainer.style.position = "relative";
btnContainer.style.width = "420px";
btnContainer.style.height = "200px";

// ❤️ YES button
const yesBtn = document.createElement("button");
yesBtn.innerText = "Yes💞";
yesBtn.style.padding = "16px 42px";
yesBtn.style.fontSize = "22px";
yesBtn.style.borderRadius = "40px";
yesBtn.style.border = "none";
yesBtn.style.cursor = "pointer";
yesBtn.style.background = "white";
yesBtn.style.color = "#ff416c";
yesBtn.style.fontWeight = "700";
yesBtn.style.boxShadow = "0 0 30px rgba(255,255,255,0.9)";
yesBtn.style.transition = "all 0.4s ease";

// 😳 NO button
const noBtn = document.createElement("button");
noBtn.innerText = "No😳";
noBtn.style.padding = "14px 36px";
noBtn.style.fontSize = "20px";
noBtn.style.borderRadius = "40px";
noBtn.style.border = "none";
noBtn.style.cursor = "pointer";
noBtn.style.position = "absolute";
noBtn.style.left = "220px";
noBtn.style.top = "90px";
noBtn.style.background = "rgba(255,255,255,0.85)";
noBtn.style.color = "#111";

// 🏃 Run away effect
noBtn.addEventListener("mousemove", () => {
  const maxX = btnContainer.clientWidth - noBtn.offsetWidth;
  const maxY = btnContainer.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


// // 💖 Love message
// const loveMsg = document.createElement("p");
// // loveMsg.innerText = "💖 I’m really glad you chose this.";
// loveMsg.innerText="let’s see where this goes 💕"
// loveMsg.style.fontSize = "26px";
// loveMsg.style.marginTop = "35px";
// loveMsg.style.opacity = "0";
// loveMsg.style.transition = "opacity 0.6s ease";

// // ✨ YES click
// yesBtn.addEventListener("click", () => {
//   loveMsg.style.opacity = "1";
//   btnContainer.style.opacity = "0";
//   btnContainer.style.transform = "scale(0.8)";
// });

// 💖 Love message
const loveMsg = document.createElement("div");
loveMsg.innerHTML = `
  <h2 style="font-size:32px; margin-bottom:10px;">💖 This just became our moment</h2>
  <p style="font-size:22px; opacity:0.9;">
    Somewhere between this click and this smile,<br>
    a beautiful story just began.
  </p>
`;
loveMsg.style.marginTop = "35px";
loveMsg.style.opacity = "0";
loveMsg.style.transform = "scale(0.9)";
loveMsg.style.transition = "all 0.8s ease";

// ✨ YES click magic
yesBtn.addEventListener("click", () => {
  // Hide buttons
  btnContainer.style.opacity = "0";
  btnContainer.style.transform = "scale(0.7)";

  // Show message
  loveMsg.style.opacity = "1";
  loveMsg.style.transform = "scale(1)";

  // 💕 Heart burst effect
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = `${16 + Math.random() * 24}px`;
    heart.style.animation = `confettiFall ${2 + Math.random() * 2}s ease-out`;
    proposalSection.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
});



// Hover glow
yesBtn.addEventListener("mouseenter", () => {
  yesBtn.style.transform = "scale(1.12)";
});
yesBtn.addEventListener("mouseleave", () => {
  yesBtn.style.transform = "scale(1)";
});

// Append
btnContainer.appendChild(yesBtn);
btnContainer.appendChild(noBtn);

proposalSection.appendChild(question);
proposalSection.appendChild(confession);
proposalSection.appendChild(btnContainer);
proposalSection.appendChild(loveMsg);

main.appendChild(proposalSection);


// ================= NAV CLICK FIX =================

// ABOUT → scroll to top / profile
about.addEventListener("click", () => {
  header.scrollIntoView({ behavior: "smooth" });
});

// SKILLS → scroll to skills section
skills.addEventListener("click", () => {
  bc.scrollIntoView({ behavior: "smooth" });
});

// PROPOSAL → scroll to proposal section
proposal.addEventListener("click", () => {
  proposalSection.scrollIntoView({ behavior: "smooth" });
});

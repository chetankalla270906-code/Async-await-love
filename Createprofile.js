document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("skills");
  const box = document.getElementById("skillsBox");
  const msg = document.getElementById("limitMsg");

  let skillCount = 0;

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // 🔥 stops form submission

      if (input.value.trim() === "") return;

      if (skillCount >= 4) {
        msg.innerText = "You can add only 4 skills";
        return;
      }

      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.innerText = input.value;

      box.appendChild(tag);
      skillCount++;

      input.value = "";
      msg.innerText = "";
    }
  });

});

let btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
  alert("submitted");
})
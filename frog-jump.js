var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 400);
}
var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < -220 && blockLeft > -260 && characterTop >= 180) {
    block.style.animation = "none";
    alert("Koniec Gry!\nZdobyte Punkty: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 1.2s infinite linear";
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);

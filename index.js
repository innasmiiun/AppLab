let item = document.getElementsByClassName("question_item");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let block = this.nextElementSibling;
    if (block.style.display === "block") {
      block.style.display = "none";
    } else {
      block.style.display = "block";
    }
  });
}

function toggleMenu() {
  let menu = document.getElementById("toggleMenu");
  if (menu.style.display === "grid") {
    menu.style.display = "none";
  } else {
    menu.style.display = "grid";
  }
}

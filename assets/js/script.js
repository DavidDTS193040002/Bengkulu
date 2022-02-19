const dropdown = document.querySelector(".dropdown-content");
const button = document.querySelector(".tombol-drop").addEventListener("click", tampilDrop);

function tampilDrop() {
  if (dropdown.classList.contains("hide")) {
    dropdown.classList.remove("hide");
    dropdown.classList.add("show");
  } else {
    dropdown.classList.remove("show");
    dropdown.classList.add("hide");
  }
}




// button to scroll up

let test = true;
let bttnScrolling = document.getElementById("scrolling-button");
console.log(bttnScrolling);
// just to verfiy

if (test === true) {
  // condition, fu9ash tban o fu9ash laa
  window.onscroll = function () {
    if (window.scrollY > 600) {
      bttnScrolling.style.display = "block";
    } else {
      bttnScrolling.style.display = "none";
    }
  };

  // create function
  function up() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }

  // apply the function
  bttnScrolling.onclick = function () {
    up();
  };
}

// --- --- ---

// let bttnChange = document.getElementById("xx");
// let beforeEl = document.querySelector(
//   ".services .services-content .col .image::before"
// );
// console.log(beforeEl);

// colors = ["#eee", "#ddd", "#000", "#fff"];

// let expression = colors[Math.floor(Math.random() * colors.length)];
// console.log(expression);

// function refresh() {
//   location.reload();
// }
// // create a function for refresh the page

// bttnChange.addEventListener("click", refresh);

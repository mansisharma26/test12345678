let btns = document.querySelectorAll("button");

let h1 = document.querySelector(".main h1");

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener("click", function () {
    if (this.innerText === "dec") {
      h1.innerText = parseInt(h1.innerText) - 1;
    } else {
      h1.innerText = parseInt(h1.innerText) + 1;
    }
  });
}
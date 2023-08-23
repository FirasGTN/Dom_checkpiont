let qt = document.querySelectorAll(".quantite");
let plus = document.querySelectorAll(".plus");
let moins = document.querySelectorAll(".moins");
let total = document.getElementById("total");
let price = document.querySelectorAll(".price");
let heart = document.querySelectorAll(".heart");
let about = document.querySelectorAll(".about");
let dabout = document.querySelectorAll(".dabout");
let del = document.querySelectorAll(".del");
let card = document.querySelectorAll(".card");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qt[i].innerHTML++;
    total.innerHTML = Number(total.innerHTML) + Number(price[i].innerHTML);
  });
}
for (let i = 0; i < moins.length; i++) {
  moins[i].addEventListener("click", function () {
    if (Number(qt[i].innerHTML) > 0) {
      qt[i].innerHTML--;
      total.innerHTML = Number(total.innerHTML) - Number(price[i].innerHTML);
    }
  });
}
// delete
for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
    card[i].remove();
    total.innerHTML =
      Number(total.innerHTML) -
      Number(price[i].innerHTML) * Number(qt[i].innerHTML);
  });
}
// heart
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].style.color === "red") {
      heart[i].style.color = "black";
    } else {
      heart[i].style.color = "red";
    }
  });
}

let isStyle1 = true;

for (let i = 0; i < about.length; i++) {
  about[i].addEventListener("click", function () {
    if (isStyle1) {
      dabout[i].classList.add("style1");
    } else {
      dabout[i].classList.remove("style1");
    }
    isStyle1 = !isStyle1;
  });
}

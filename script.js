// heart effect
let clickableHearts = document.querySelectorAll(".heart");

clickableHearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("clicked");
  });
});

// delete the card 

let button = document.querySelectorAll(".del");

button.forEach(function (button, index) {
  button.addEventListener("click", function () {
    if (index == 0) {
      document.getElementById("card1").style.display = "none";
    } else if (index == 1) {
      document.getElementById("card2").style.display = "none";
    } else {
      document.getElementById("card3").style.display = "none";
    }
  });
});

// quantite and totale price 

let bt = document.querySelectorAll(".bt");
let q1 = document.getElementById("quantite1");
let q2 = document.getElementById("quantite2");
let q3 = document.getElementById("quantite3");
let total = document.getElementById("total");
let price = document.getElementsByClassName("price");
let tot = Number(total.innerHTML);
let init = 0;

bt.forEach(function (bt, index) {
  bt.addEventListener("click", function () {
    if (index == 0 && Number(q1.innerHTML) > 0) {
      q1.innerHTML--;
      init -= Number(price[0].innerHTML);
      total.innerHTML = init;
    } else if (index == 1) {
      q1.innerHTML++;
      init += Number(price[0].innerHTML);
      total.innerHTML = init;
    } else if (index == 2 && Number(q2.innerHTML) > 0) {
      q2.innerHTML--;
      init -= Number(price[1].innerHTML);
      total.innerHTML = init;
    } else if (index == 3) {
      q2.innerHTML++;
      init += Number(price[1].innerHTML);
      total.innerHTML = init;
    } else if (index == 4 && Number(q3.innerHTML) > 0) {
      q3.innerHTML--;
      init -= Number(price[2].innerHTML);
      total.innerHTML = init;
    } else if (index == 5) {
      q3.innerHTML++;
      init += Number(price[2].innerHTML);
      total.innerHTML = init;
    }
  });
});

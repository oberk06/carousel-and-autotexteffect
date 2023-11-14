const images = document.querySelectorAll("img");
const ileri = document.getElementById("ileri");
const geri = document.getElementById("geri");
const stop = document.getElementById("stop");
const resimler = document.querySelector(".resimler");
const akan = document.getElementById("akan");

let transform = 0;
let resimno = 0;

let resimgeç = setInterval(() => {
  resimno = (resimno + 1) % images.length;
  transform = -resimno * 600;

  transition();
}, 5000);

stop.addEventListener("click", () => {
  clearInterval(resimgeç);
});

function transition() {
  images.forEach((item) => {
    item.style.transform = `translateX(${transform}px)`;
    item.style.transition = "2s";
  });
}

ileri.addEventListener("click", () => {
  clearInterval(resimgeç);
  resimno = (resimno + 1) % images.length;
  transform = -resimno * 600;

  ortak();
});
function ortak() {
  images.forEach((item) => {
    item.style.transform = `translateX(${transform}px)`;
    item.style.transition = "2s";
  });
  resimgeç = setInterval(() => {
    resimno = (resimno + 1) % images.length;
    transform = -resimno * 600;

    transition();
  }, 5000);
}

geri.addEventListener("click", () => {
  clearInterval(resimgeç);
  resimno = (resimno - 1 + images.length) % images.length;
  transform = -resimno * 600;

  ortak();
});

resimler.addEventListener("mouseover", () => {
  clearInterval(resimgeç);
});
resimler.addEventListener("mouseout", () => {
  resimgeç = setInterval(() => {
    resimno = (resimno + 1) % images.length;
    transform = -resimno * 600;

    transition();
  }, 5000);
});

let yazi = "I am from TURKEY. You ?";

let yazidizi = yazi.split("");
console.log(yazidizi);

let index = 0;

let yaz = setInterval(() => {
  if (index < yazidizi.length) {
    akan.textContent += yazidizi[index];
    index++;
  } else {
    akan.textContent = "";
    index = 0;
  }
}, 200);

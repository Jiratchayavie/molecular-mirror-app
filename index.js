const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const hamburger = document.getElementById("hamburger");
const mobileMenu  = document.getElementById("mobile-menu");
const overlay  = document.getElementById("overlay");
const orbitals = document.getElementById("orbitals");
const bonds = document.getElementById("bonds");
const molecules = document.getElementById("molecules");
const assemblies = document.getElementById("assemblies");
const modeling = document.getElementById("modeling");

let menuActive = false;

const handleExpasion = (event) => {
  event.currentTarget.classList.toggle("expanded");
}

hamburger.addEventListener("click", (event) => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  if (menuActive) {
    bar1.style.animation = "bar1out .5s forwards";
    bar2.style.animation = "bar2out .5s forwards";
    bar3.style.animation = "bar3out .5s forwards";
    menuActive = false;
  } else {
    menuActive = true;
    bar1.style.animation = "bar1in .5s forwards";
    bar2.style.animation = "bar2in .5s forwards";
    bar3.style.animation = "bar3in .5s forwards";
  }
});

orbitals.addEventListener("click", handleExpasion);
bonds.addEventListener("click", handleExpasion);
molecules.addEventListener("click", handleExpasion);
assemblies.addEventListener("click", handleExpasion);
modeling.addEventListener("click", handleExpasion);

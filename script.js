const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;



function moveAndGrow() { 
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
}
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);
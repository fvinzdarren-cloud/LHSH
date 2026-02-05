const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

function moveAndGrow() {
  // Get maximum x and y based on window size
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  // Random position for NO button
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute"; // ensure it's movable
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Grow YES button
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
}

// Attach the correct function
noBtn.addEventListener("mouseover", moveAndGrow);
noBtn.addEventListener("click", moveAndGrow);
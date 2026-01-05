const balloons = document.getElementById("balloons");

/* AGE CHECK */
function submitAge() {
  const age = document.getElementById("ageInput").value;

  if (age != 20) {
    alert("Nice try 😄 Enter your real age!");
    return;
  }

  document.getElementById("agePopup").style.display = "none";
  document.getElementById("section1").style.display = "block";

  createBalloons(20);
  confetti();
  scrollToSection("section1");
}

/* BALLOONS */
function createBalloons(count) {
  for (let i = 0; i < count; i++) {
    const b = document.createElement("span");
    b.innerText = "🎈";
    b.style.position = "fixed";
    b.style.left = Math.random() * 100 + "vw";
    b.style.bottom = "-50px";
    b.style.fontSize = "2rem";
    b.style.animation = "floatUp 5s linear";
    balloons.appendChild(b);
  }
}

/* SECTION FLOW */
function showSection2() {
  document.getElementById("section2").style.display = "block";
  scrollToSection("section2");
}

function showSection3() {
  document.getElementById("section3").style.display = "block";
  scrollToSection("section3");
}

function showFinal() {
  document.getElementById("final").style.display = "block";
  confetti();
  scrollToSection("final");
}

/* SCROLL */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* CONFETTI */
function confetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 2,
    dy: Math.random() * 3 + 1
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#00f7ff";
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* MUSIC */
let playing = false;
const music = document.getElementById("bgMusic");
function toggleMusic() {
  playing ? music.pause() : music.play();
  playing = !playing;
}

// reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// AI call
async function askAI() {
  const q = document.getElementById("query").value;

  const res = await fetch("http://localhost:8000/ask", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query: q})
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.answer;
}

// 3D tilt
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    card.style.transform = `rotateX(${e.offsetY/10}deg) rotateY(${e.offsetX/10}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
});

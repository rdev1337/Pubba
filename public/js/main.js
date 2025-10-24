// mobile menu
(function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn &&
    menuBtn.addEventListener("click", () =>
      mobileMenu.classList.toggle("hidden")
    );

  // simple carousel
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".hero-dot"));
  let i = 0;
  function show(n) {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === n));
    dots.forEach((d, idx) => (d.style.opacity = idx === n ? "1" : "0.5"));
    i = n;
  }
  dots.forEach((d) =>
    d.addEventListener("click", () => show(+d.dataset.index))
  );
  if (slides.length) {
    setInterval(() => show((i + 1) % slides.length), 5000);
  }
})();

// Play button → open inline video (swap URL to your MP4 or modal logic)
(function () {
  var play = document.getElementById("playVideo");
  if (play) {
    play.addEventListener("click", function () {
      var frame = document.querySelector(".video-frame");
      frame.innerHTML =
        '<video controls autoplay style="width:100%;height:420px;object-fit:cover"><source src="/video/plant.mp4" type="video/mp4"></video>';
    });
  }
  // Stories arrows
  var row = document.getElementById("storiesRow");
  var prev = document.getElementById("prevStory");
  var next = document.getElementById("nextStory");
  function scrollByCard(dx) {
    row && row.scrollBy({ left: dx, behavior: "smooth" });
  }
  prev && prev.addEventListener("click", () => scrollByCard(-300));
  next && next.addEventListener("click", () => scrollByCard(300));
})();

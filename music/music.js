const asset = (file) => `../assets/music/${file}`;

const latestItems = [
  {
    title: "Composition Reel 2020",
    image: "image-asset-1588135070434-h4pi7hkl24.jpg",
    url: "https://youtu.be/m6AHyvgxmVo?rel=0"
  },
  {
    title: "Somos Tierra",
    image: "screen-shot-2020-10-12-at-9-49-43-am.jpg",
    url: "https://youtu.be/uDojrKuuiaY?rel=0"
  },
  {
    title: "Happiness - Short film by Steve Cutts",
    image: "screen-shot-2018-08-30-at-2-52-45-am.jpg",
    url: "https://youtu.be/34gEyVs8gww?rel=0"
  },
  {
    title: "Winery Lane",
    image: "screen-shot-2018-08-30-at-3-05-16-am.png",
    url: "https://youtu.be/-2TZ1KnLZ-Q?rel=0"
  },
  {
    title: "Storm in The Labrador Sea - trailer",
    image: "screen-shot-2018-08-30-at-2-18-42-am.jpg",
    url: "https://youtu.be/qLlOi3hXAV0"
  },
  {
    title: "Maximall Music Abridged",
    image: "image-asset-1585456226556-gx4dguwp7w.jpg",
    url: "https://youtu.be/-Kl5M3nl_Io?rel=0"
  },
  {
    title: "The Control Master",
    image: "screen-shot-2018-08-30-at-2-53-53-am.jpg",
    url: "https://youtu.be/3dHnCOiriII?rel=0"
  },
  {
    title: "Amatuer Hour",
    image: "screen-shot-2018-08-30-at-2-56-08-am.png",
    url: "https://youtu.be/vG-clNNIRMA?rel=0"
  },
  {
    title: "Sakura",
    image: "screen-shot-2018-08-30-at-3-09-28-am.jpg",
    url: "https://youtu.be/OH10oP15dVY?rel=1"
  }
];

const creditLogos = [
  ["Sweary Canary", "sweary-canary.png"],
  ["Sydney Film School", "sydney-film-school-logo.jpg"],
  ["Baptist Churches NSW", "baptist-churches-nsw.png"],
  ["Blake eLearning", "blake-elearning.png"],
  ["BRFT", "brft.png"],
  ["Visual Invest", "visual-invest.png"],
  ["Roseville College", "rosevill-college.png"],
  ["Malaysia Festival Sydney", "malaysia-festival.jpg"],
  ["Hamish and Andy", "hamish-and-andy.png"],
  ["Winery Lane", "winery-lane.png"],
  ["Barker College", "barker-college.jpg"],
  ["Furnace and the Fundamentals", "furnace-logo.png"],
  ["Ampersand Video", "ampersand-video.jpg"],
  ["Greek Festival", "greek-festival.jpg"],
  ["Zurich Film Festival", "zurich-film-festival.jpg"]
];

const happinessScores = [
  "happiness-marcus-anderson-full-score-page-01.jpg",
  "happiness-marcus-anderson-full-score-page-02.jpg",
  "happiness-marcus-anderson-full-score-page-03.jpg",
  "happiness-marcus-anderson-full-score-page-04.jpg",
  "happiness-marcus-anderson-full-score-page-05.jpg",
  "happiness-marcus-anderson-full-score-page-06.jpg",
  "happiness-marcus-anderson-full-score-page-07.jpg",
  "happiness-marcus-anderson-full-score-page-08.jpg",
  "happiness-marcus-anderson-full-score-page-09.jpg",
  "happiness-marcus-anderson-full-score-page-10.jpg",
  "happiness-marcus-anderson-full-score-page-11.jpg",
  "happiness-marcus-anderson-full-score-page-12.jpg",
  "happiness-marcus-anderson-full-score-page-13.jpg",
  "happiness-marcus-anderson-full-score-page-14.jpg"
];

const somosScores = [
  "never-far-from-home-somos-tierra-page-01.jpg",
  "never-far-from-home-somos-tierra-page-02.jpg",
  "never-far-from-home-somos-tierra-page-03.jpg",
  "never-far-from-home-somos-tierra-page-04.jpg",
  "never-far-from-home-somos-tierra-page-05.jpg",
  "never-far-from-home-somos-tierra-page-06.jpg",
  "never-far-from-home-somos-tierra-page-07.jpg",
  "never-far-from-home-somos-tierra-page-08.jpg",
  "never-far-from-home-somos-tierra-page-09.jpg",
  "never-far-from-home-somos-tierra-page-10.jpg",
  "never-far-from-home-somos-tierra-page-11.jpg",
  "never-far-from-home-somos-tierra-page-12.jpg",
  "never-far-from-home-somos-tierra-page-13.jpg",
  "never-far-from-home-somos-tierra-page-14.jpg",
  "never-far-from-home-somos-tierra-page-15.jpg",
  "never-far-from-home-somos-tierra-page-16.jpg",
  "never-far-from-home-somos-tierra-page-17.jpg",
  "never-far-from-home-somos-tierra-page-18.jpg",
  "never-far-from-home-somos-tierra-page-19.jpg",
  "never-far-from-home-somos-tierra-page-20.jpg",
  "never-far-from-home-somos-tierra-page-21.jpg"
];

const aboutPhotos = [
  "20191029-ma-216-2.jpg",
  "20191029-ma-372.jpg",
  "20191029-ma-23.jpg",
  "20191029-ma-300.jpg",
  "20191029-ma-421.jpg",
  "20191029-ma-312.jpg",
  "20191029-ma-53-edited.jpg"
];

let currentSlide = 0;
let currentAboutSlide = 0;

function renderSlide() {
  const item = latestItems[currentSlide];
  const image = document.querySelector(".slide-image");
  const link = document.querySelector(".slide-link");
  const title = document.querySelector(".slide-caption h2");
  const count = document.querySelector(".slide-caption span");
  image.src = asset(item.image);
  image.alt = item.title;
  link.href = item.url;
  link.setAttribute("aria-label", `Open ${item.title} on YouTube`);
  title.textContent = item.title;
  count.textContent = `${currentSlide + 1} / ${latestItems.length}`;
}

function moveSlide(delta) {
  currentSlide = (currentSlide + delta + latestItems.length) % latestItems.length;
  renderSlide();
}

function pageNumber(file) {
  const match = file.match(/page-(\d+)/);
  return match ? Number(match[1]) : 0;
}

function scorePageLink(file, className = "score-page") {
  const label = `Page ${pageNumber(file)}`;
  return `
    <a class="${className}" href="${asset(file)}" target="_blank" rel="noreferrer">
      <img src="${asset(file)}" alt="${label}" loading="lazy">
      <span>${label}</span>
    </a>
  `;
}

function renderScores(targetId, files) {
  const target = document.querySelector(targetId);
  target.innerHTML = files.map((file) => scorePageLink(file)).join("");
}

function renderScorePreview(targetId, files) {
  const target = document.querySelector(targetId);
  target.innerHTML = files.slice(0, 3).map((file) => scorePageLink(file, "score-sample")).join("");
}

function renderLogos() {
  document.querySelector("#creditGrid").innerHTML = creditLogos.map(([name, file]) => `
    <div class="logo-card">
      <img src="${asset(file)}" alt="${name}" loading="lazy">
    </div>
  `).join("");
}

function renderAboutGallery() {
  const image = document.querySelector(".about-image");
  image.src = asset(aboutPhotos[currentAboutSlide]);
  image.alt = `About photo ${currentAboutSlide + 1}`;
  document.querySelectorAll(".about-thumb").forEach((thumb, index) => {
    thumb.classList.toggle("is-active", index === currentAboutSlide);
    thumb.setAttribute("aria-pressed", String(index === currentAboutSlide));
  });
}

function setAboutSlide(index) {
  currentAboutSlide = (index + aboutPhotos.length) % aboutPhotos.length;
  renderAboutGallery();
}

function moveAboutSlide(delta) {
  setAboutSlide(currentAboutSlide + delta);
}

function renderAboutThumbnails() {
  document.querySelector("#aboutThumbnails").innerHTML = aboutPhotos.map((file, index) => `
    <button class="about-thumb" type="button" aria-label="Show about photo ${index + 1}" aria-pressed="false" data-about-slide="${index}">
      <img src="${asset(file)}" alt="" loading="lazy">
    </button>
  `).join("");
  document.querySelectorAll(".about-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => setAboutSlide(Number(thumb.dataset.aboutSlide)));
  });
  renderAboutGallery();
}

function setPage(page) {
  const selected = document.querySelector(`[data-page="${page}"]`) ? page : "latest";
  document.querySelectorAll("[data-page]").forEach((section) => {
    section.classList.toggle("is-active", section.dataset.page === selected);
  });
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.pageLink === selected);
  });
  if (location.hash.replace("#", "") !== selected) {
    history.replaceState(null, "", `#${selected}`);
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelector(".gallery-arrow.previous").addEventListener("click", () => moveSlide(-1));
document.querySelector(".gallery-arrow.next").addEventListener("click", () => moveSlide(1));
document.querySelector(".about-arrow.previous").addEventListener("click", () => moveAboutSlide(-1));
document.querySelector(".about-arrow.next").addEventListener("click", () => moveAboutSlide(1));
document.querySelectorAll("[data-page-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setPage(link.dataset.pageLink);
  });
});
window.addEventListener("hashchange", () => setPage(location.hash.replace("#", "")));

renderSlide();
renderLogos();
renderScorePreview("#happinessScorePreview", happinessScores);
renderScorePreview("#somosScorePreview", somosScores);
renderScores("#happinessScores", happinessScores);
renderScores("#somosScores", somosScores);
renderAboutThumbnails();
setPage(location.hash.replace("#", "") || "latest");

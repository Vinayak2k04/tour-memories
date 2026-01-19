// document.addEventListener("scroll", () => {
//   document.querySelectorAll(".section").forEach(sec => {
//     const rect = sec.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       sec.style.opacity = 1;
//       sec.style.transform = "translateY(0)";
//     }
//   });
// });

// document.querySelectorAll(".section").forEach(sec => {
//   sec.style.opacity = 0;
//   sec.style.transform = "translateY(40px)";
//   sec.style.transition = "1.2s ease";
// });
// const container = document.querySelector(".floating-images");

// // how many images you have
// const TOTAL_IMAGES = 40;

// for (let i = 0; i < TOTAL_IMAGES; i++) {
//   const img = document.createElement("img");

//   if (i === 0) {
//     img.src = "images/floating/1.jpg";
//   } else {
//     img.src = `images/floating/1 (${i}).jpg`;
//   }

//   img.style.left = Math.random() * 100 + "vw";
//   img.style.opacity = 0.3;
//   img.style.animationDuration = 30 + Math.random() * 20 + "s";

//   container.appendChild(img);
// }
// const container = document.querySelector(".floating-images");
// const TOTAL_IMAGES = 40;

// for (let i = 0; i < TOTAL_IMAGES; i++) {
//   const img = document.createElement("img");

//   // filename logic (kept same as before)
//   img.src = i === 0
//     ? "images/floating/1.jpg"
//     : `images/floating/1 (${i}).jpg`;

//   // RANDOM POSITION & TIMING
//   img.style.left = Math.random() * 100 + "vw";
//   img.style.top = -(Math.random() * 100 + 200) + "px";
//   img.style.animationDuration = 25 + Math.random() * 20 + "s";
//   img.style.animationDelay = Math.random() * 20 + "s";

//   container.appendChild(img);
// }

// const container = document.querySelector(".floating-images");
// const TOTAL_IMAGES = 40;

// for (let i = 0; i < TOTAL_IMAGES; i++) {
//   const img = document.createElement("img");

//   // filename logic (unchanged)
//   img.src = i === 0
//     ? "images/floating/1.jpg"
//     : `images/floating/1 (${i}).jpg`;

//   // random horizontal position
//   img.style.left = Math.random() * 100 + "vw";

//   // animation settings
//   const duration = 25 + Math.random() * 20;
//   const delay = Math.random() * duration;

//   img.style.animationDuration = duration + "s";

//   // ⭐ THIS IS THE MAGIC
//   img.style.animationDelay = `-${delay}s`;

//   container.appendChild(img);
// }
// const container = document.querySelector(".floating-images");

// // number of images you want
// const TOTAL_IMAGES = 40;

// // width of each lane (px)
// const LANE_WIDTH = 220;

// // calculate how many lanes fit screen
// const lanes = Math.floor(window.innerWidth / LANE_WIDTH);

// // track used lanes
// let usedLanes = 0;

// for (let i = 0; i < TOTAL_IMAGES; i++) {
//   const img = document.createElement("img");

//   // filename logic (unchanged)
//   img.src =
//     i === 0
//       ? "images/floating/1.jpg"
//       : `images/floating/1 (${i}).jpg`;

//   // lane assignment (NO overlap)
//   const lane = usedLanes % lanes;
//   usedLanes++;

//   img.style.left = lane * LANE_WIDTH + "px";

//   // animation settings
//   const duration = 30 + Math.random() * 20;
//   img.style.animationDuration = duration + "s";

//   // ⭐ negative delay = already falling
//   img.style.animationDelay = `-${Math.random() * duration}s`;

//   container.appendChild(img);
// }


// const container = document.querySelector(".floating-images");

// const TOTAL_IMAGES = 60;
// const images = [];

// // helper to get random number
// const rand = (min, max) => Math.random() * (max - min) + min;

// // screen size
// let width = window.innerWidth;
// let height = window.innerHeight;

// // spacing control (prevents overlap)
// const MIN_GAP_X = 220;
// const MIN_GAP_Y = 260;

// // store occupied positions
// const positions = [];

// function isOverlapping(x, y) {
//   return positions.some(p =>
//     Math.abs(p.x - x) < MIN_GAP_X &&
//     Math.abs(p.y - y) < MIN_GAP_Y
//   );
// }

// // create images
// for (let i = 0; i < TOTAL_IMAGES; i++) {
//   const img = document.createElement("img");

//   img.src =
//     i === 0
//       ? "images/floating/1.jpg"
//       : `images/floating/1 (${i}).jpg`;

//   let x, y, attempts = 0;

//   do {
//     x = rand(0, width - 200);
//     y = rand(-height, height);
//     attempts++;
//   } while (isOverlapping(x, y) && attempts < 50);

//   positions.push({ x, y });

//   img.style.transform = `translate(${x}px, ${y}px)`;

//   container.appendChild(img);

//   images.push({
//     el: img,
//     x,
//     y,
//     speed: rand(0.3, 0.8)
//   });
// }

// // animation loop
// function animate() {
//   images.forEach(img => {
//     img.y += img.speed;

//     if (img.y > height + 300) {
//       img.y = -300;
//     }

//     img.el.style.transform = `translate(${img.x}px, ${img.y}px)`;
//   });

//   requestAnimationFrame(animate);
// }

// animate();

// // responsive fix
// window.addEventListener("resize", () => {
//   width = window.innerWidth;
//   height = window.innerHeight;
// });

// document.querySelectorAll(".slideshow").forEach(slideshow => {
//   const slides = slideshow.querySelectorAll("img");
//   let index = 0;

//   setInterval(() => {
//     slides[index].classList.remove("active");
//     index = (index + 1) % slides.length;
//     slides[index].classList.add("active");
//   }, 4000);
// });



const container = document.getElementById("falling-images");

let currentImage = 1;
const TOTAL_IMAGES = 2000;
const BATCH_SIZE = 25;

function createFallingImage(imgNumber) {
  const img = document.createElement("img");
  img.src = `images/floating/1 (${imgNumber}).jpg`;
  img.className = "fall-img";

  img.style.left = Math.random() * 90 + "vw";
  img.style.animationDuration = 6 + Math.random() * 6 + "s";

  container.appendChild(img);

  img.addEventListener("animationend", () => {
    img.remove(); 
  });

  img.onerror = () => img.remove();

}

let imagePool = [];
let poolIndex = 0;

function shuffleImages() {
  imagePool = [];
  for (let i = 1; i <= TOTAL_IMAGES; i++) {
    imagePool.push(i);
  }

  // Fisher–Yates shuffle
  for (let i = imagePool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagePool[i], imagePool[j]] = [imagePool[j], imagePool[i]];
  }

  poolIndex = 0;
}

// initialize first shuffle
shuffleImages();


function launchBatch() {
  for (let i = 0; i < BATCH_SIZE; i++) {
    setTimeout(() => {
      if (poolIndex >= imagePool.length) {
        shuffleImages();
      }

      createFallingImage(imagePool[poolIndex]);
      poolIndex++;
    }, i * 200);
  }
}


setInterval(() => {
  launchBatch();
}, 4000);


// function createFallingImage(imgNumber) {
//   const img = document.createElement("img");

//   // ✅ FORCE CORRECT RELATIVE PATH
//   // const imgPath = "./images/floating/1(" + imgNumber + ").jpg";
//   img.src = "./images/floating/1(" + imgNumber + ").jpg";
//   // img.src = imgPath;

//   img.className = "fall-img";
//   img.style.left = Math.random() * 90 + "vw";
//   img.style.animationDuration = 6 + Math.random() * 4 + "s";

//   // ✅ DEBUGGING (VERY IMPORTANT)
//   img.onload = () => {
//     console.log("Loaded:", imgPath);
//   };

//   img.onerror = () => {
//     console.error("Image not found:", imgPath);
//     img.remove(); // avoid broken icons
//   };

//   container.appendChild(img);

//   img.addEventListener("animationend", () => {
//     img.remove();
//   });
// }


// window.onload = function () {
//   console.log("✅ JS loaded");

//   const container = document.getElementById("falling-images");

//   if (!container) {
//     console.error("❌ #falling-images div NOT FOUND");
//     return;
//   }

//   console.log("✅ Container found");

//   let currentImage = 1;
//   const TOTAL_IMAGES = 5; // keep small for now

//   function createImage(num) {
//     const img = document.createElement("img");

//     img.src = "images/floating/1(" + num + ").jpg";
//     img.className = "fall-img";

//     img.style.left = Math.random() * 80 + "vw";
//     img.style.animationDuration = "6s";

//     img.onload = () => console.log("✅ Loaded:", img.src);
//     img.onerror = () => console.error("❌ Failed:", img.src);

//     container.appendChild(img);
//   }

//   for (let i = 0; i < TOTAL_IMAGES; i++) {
//     createImage(i + 1);
//   }
// };


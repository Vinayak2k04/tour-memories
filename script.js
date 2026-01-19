const container = document.getElementById("falling-images");

let currentImage = 1;
const TOTAL_IMAGES = 700;
const BATCH_SIZE = 25;

// function createFallingImage(imgNumber) {
//   const img = document.createElement("img");
//   img.src = `images/floating/1 (${imgNumber}).jpg`;
//   img.className = "fall-img";
//   img.loading = "lazy";


//   img.style.left = Math.random() * 90 + "vw";
//   img.style.animationDuration = 6 + Math.random() * 6 + "s";

//   container.appendChild(img);

//   img.addEventListener("animationend", () => {
//     img.remove(); 
//   });

//   img.onerror = () => img.remove();
//   img.decoding = "async";
//   img.fetchPriority = "low";

// }
function createFallingImage(imgNumber) {
  const img = document.createElement("img");
  img.src = `images/floating/1 (${imgNumber}).jpg`;
  img.className = "fall-img";

  img.loading = "lazy";
  img.decoding = "async";
  img.fetchPriority = "low";

  img.style.left = Math.random() * 90 + "vw";
  img.style.animationDuration = 7 + Math.random() * 6 + "s";
  img.style.width = 70 + Math.random() * 40 + "px";


  container.appendChild(img);

  img.addEventListener("animationend", () => img.remove());
  img.onerror = () => img.remove();
}

if (poolIndex % 100 === 0) {
  console.log("Images shown:", poolIndex);
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


// function launchBatch() {
//   for (let i = 0; i < BATCH_SIZE; i++) {
//     setTimeout(() => {
//       if (poolIndex >= imagePool.length) {
//         shuffleImages();
//       }

//       createFallingImage(imagePool[poolIndex]);
//       poolIndex++;
//     }, i * 200);
//   }
//   if (container.children.length >= MAX_ON_SCREEN) return;

// }

function launchBatch() {

  for (let i = 0; i < BATCH_SIZE; i++) {
    setTimeout(() => {
      if (container.children.length >= MAX_ON_SCREEN) return;

      if (poolIndex >= imagePool.length) {
        shuffleImages();
      }

      createFallingImage(imagePool[poolIndex]);
      poolIndex++;
    }, i * 180);
  }
}



// setInterval(() => {
//   launchBatch();
// }, 4000);

let lastSpawn = 0;

function animateSpawn(time) {
  if (time - lastSpawn > 4500) {
    launchBatch();
    lastSpawn = time;
  }
  requestAnimationFrame(animateSpawn);
}

// requestAnimationFrame(animateSpawn);
setTimeout(() => {
  requestAnimationFrame(animateSpawn);
}, 2000);


document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    container.innerHTML = "";
  }
});


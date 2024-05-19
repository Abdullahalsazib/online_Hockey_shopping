let circularProgress1 = document.querySelector(".progress1"),
  progressValue1 = document.querySelector(".progress_value1");

let circularProgress2 = document.querySelector(".progress2"),
  progressValue2 = document.querySelector(".progress_value2");

let circularProgress3 = document.querySelector(".progress3"),
  progressValue3 = document.querySelector(".progress_value3");

let circularProgress4 = document.querySelector(".progress4"),
  progressValue4 = document.querySelector(".progress_value4");

function progress(progressValue, circularProgress, startProgress, endProgress) {
  progressValue.textContent = `${startProgress}%`;
  circularProgress.style.background = `conic-gradient(#ff4240 ${
    endProgress * 3.6
  }deg, #ededed 0deg)`;
  progressValue.textContent = `${endProgress}%`;
}

progress(progressValue1, circularProgress1, 0, 50);
progress(progressValue2, circularProgress2, 0, 40);
progress(progressValue3, circularProgress3, 0, 50);
progress(progressValue4, circularProgress4, 0, 60);

// let progressStartValue = 0,
//   speed = 20;

// let progressEndValue1 = 90;
// let progressEndValue2 = 90;
// let progressEndValue3 = 90;
// let progressEndValue4 = 90;

// let progress1 = setInterval(() => {
//   progressStartValue++;

//   progressValue1.textContent = `${progressStartValue}%`;

//   circularProgress1.style.background = `conic-gradient(#7d2ae8 ${
//     progressStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if (progressStartValue == progressEndValue1) {
//     clearInterval(progress1);
//   }
// }, speed);
// let progress2 = setInterval(() => {
//   progressStartValue++;

//   progressValue2.textContent = `${progressStartValue}%`;

//   circularProgress2.style.background = `conic-gradient(#7d2ae8 ${
//     progressStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if (progressStartValue == progressEndValue2) {
//     clearInterval(progress2);
//   }
// }, speed);

let menuIcon = document.querySelector(".fa-bars-staggered"),
  hidden_nav_item = document.querySelector(".hidden_nav_item");
menuIcon.addEventListener("click", () => {
  hidden_nav_item.classList.toggle("hidden_nav_item_toggle");
});

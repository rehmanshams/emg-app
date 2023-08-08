const video = document.getElementById("video-id");
const myImage = document.getElementById("play-pause-icon");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    document.getElementById("hidden-play-button").style.display = "none";
    myImage.src = "./images/pause_circle_icon.png";
  } else {
    video.pause();
    myImage.src = "./images/player_icon.png";
  }
}
function hoverImagePause() {
  if (video.paused) return;
  myImage.src = "./images/pause_circle_icon.png";
}
function leaveContainerVideo() {
  if (video.paused) return;
  myImage.src = "";
}
// const faqData = [
//   {
//     id: 1,
//     question: "What is MNTN Performance TV advertising?",
//     answer: "Answer Number One",
//   },
//   {
//     id: 2,
//     question:
//       "How does MNTN Performance TV differ from Traditional TV adversing?",
//     answer: "Answer Number Two",
//   },
//   {
//     id: 3,
//     question:
//       "On what networks and devices can i advertise using MNTN Performance TV?",
//     answer: "Answer Number Three",
//   },
//   {
//     id: 4,
//     question:
//       "What does it take to get started with MNTN Performance TV Advertising?",
//     answer: "Answer Number Four",
//   },
//   {
//     id: 5,
//     question:
//       "What does MNTN Performance TV compare to Paid Search Advertising?",
//     answer: "Answer Number Five",
//   },
//   {
//     id: 6,
//     question:
//       "Can i use my existing video assets for MNTN Performance TV Advertising?",
//     answer: "Answer Number Six",
//   },
//   {
//     id: 7,
//     question: "What is OTT Advertising?",
//     answer: "Answer Number Seven",
//   },
//   {
//     id: 8,
//     question:
//       "What does it take to get started with MNTN Performance TV Advertising?",
//     answer: "Answer Number Eight",
//   },
// ];
// const faqContent = document.getElementById("faq-content");

// const showInHtml = faqData.map((item) => {
//   return `
//   <div class="flex flex-col gap-8 border-b border-[#DCE6FF] pb-6">
//   <div
//     onclick="togglefun(${item.id})"
//     class="cursor-pointer flex justify-between"
//   >
//     <p class="text-black text-2xl leading-8 font-medium">${item.question}</p>

//     <svg
//       id="open-${item.id}"
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//     >
//       <path
//         d="M12 4V20"
//         stroke="#0A2463"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//       <path
//         d="M20 12H4"
//         stroke="#0A2463"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//     <svg
//       class="hidden"
//       id="close-${item.id}"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M18 12H6"
//         stroke="#0A2463"
//         stroke-width="1.5"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//   </div>
//   <p id="answer-${item.id}" class="hidden">${item.answer}</p>
// </div>
//     `;
// });

// if (faqContent) faqContent.innerHTML = showInHtml.join("");
// let currentFaq = 0;
// function togglefun(id) {
//   if (currentFaq == id) {
//     currentFaq = 0;
//     document.getElementById(`answer-${id}`).classList.add("hidden");
//     document.getElementById(`close-${id}`).style.display = "none";
//     document.getElementById(`open-${id}`).style.display = "block";
//   } else {
//     currentFaq = id;
//     document.getElementById(`answer-${id}`).classList.remove("hidden");
//     document.getElementById(`close-${id}`).style.display = "block";
//     document.getElementById(`open-${id}`).style.display = "none";
//   }
// }
// var i = 0;

// function prograssNumOne() {
//   if (i == 0) {
//     i = 1;
//     var getPrograssId = document.getElementById("number-progress-one");
//     var length = 49999920;
//     getPrograssId.innerHTML = formatNumber(length);
//     var id = setInterval(frame, 0);
//     function frame() {
//       if (length >= 50000000) {
//         clearInterval(id);
//       } else {
//         length++;
//         getPrograssId.innerHTML = formatNumber(length);
//       }
//     }
//   }
// }

// prograssNumOne();
var i = 0;

function prograssNumberTwo() {
  if (i == 0) {
    i = 1;
    var getPrograssIdSec = document.getElementById("number-progress-two");
    var length = 49999900;
    getPrograssIdSec.innerHTML = formatNumber(length);
    var id = setInterval(frame, 0);

    function frame() {
      if (length >= 50000000) {
        clearInterval(id);
      } else {
        length++;
        getPrograssIdSec.innerHTML = formatNumber(length);
      }
    }
  }
}
prograssNumberTwo();
function formatNumber(num) {
  var numStr = num.toString();
  var length = numStr.length;

  if (length <= 2) {
    return numStr;
  } else if (length <= 5) {
    return numStr.substr(0, length - 2) + "," + numStr.substr(length - 2);
  } else {
    return (
      numStr.substr(0, length - 5) +
      "," +
      numStr.substr(length - 5, 3) +
      "," +
      numStr.substr(length - 2)
    );
  }
}

var i = 0;

function prograssNumberThree() {
  if (i == 0) {
    i = 1;
    var getPrograssIdThird = document.getElementById("number-progress-three");
    var length = 7900;
    getPrograssIdThird.innerHTML = numberFormatThird(length);
    var id = setInterval(frame, 0);

    function frame() {
      if (length >= 8000) {
        clearInterval(id);
      } else {
        length++;
        getPrograssIdThird.innerHTML = numberFormatThird(length);
      }
    }
  }
}
prograssNumberThree();
function numberFormatThird(num) {
  var numStr = num.toString();
  var length = numStr.length;

  if (length <= 2) {
    return numStr;
  } else if (length <= 5) {
    return numStr.substr(0, length - 3) + "," + numStr.substr(length - 3);
  } else {
    return;
  }
}
function toggleClickOne() {
  let FaqVarFirst = document.getElementById("answerOne");
  if (FaqVarFirst.style.display == "block") {
    FaqVarFirst.style.display = "none";
    document.getElementById("closesvg-1").style.display = "none";
    document.getElementById("opensvg-1").style.display = "block";
  } else {
    FaqVarFirst.style.display = "block";
    document.getElementById("closesvg-1").style.display = "block";
    document.getElementById("opensvg-1").style.display = "none";
  }
}
function toggleClickTwo() {
  let FaqVarSec = document.getElementById("answerTwo");
  if (FaqVarSec.style.display == "block") {
    FaqVarSec.style.display = "none";
    document.getElementById("closesvg-2").style.display = "none";
    document.getElementById("opensvg-2").style.display = "block";
  } else {
    FaqVarSec.style.display = "block";
    document.getElementById("closesvg-2").style.display = "block";
    document.getElementById("opensvg-2").style.display = "none";
  }
}
function toggleClickThree() {
  let FaqVarThird = document.getElementById("answerThree");
  if (FaqVarThird.style.display == "block") {
    FaqVarThird.style.display = "none";
    document.getElementById("closesvg-3").style.display = "none";
    document.getElementById("opensvg-3").style.display = "block";
  } else {
    FaqVarThird.style.display = "block";
    document.getElementById("closesvg-3").style.display = "block";
    document.getElementById("opensvg-3").style.display = "none";
  }
}
function toggleClickFour() {
  let FaqVarFour = document.getElementById("answerFour");
  if (FaqVarFour.style.display == "block") {
    FaqVarFour.style.display = "none";
    document.getElementById("closesvg-4").style.display = "none";
    document.getElementById("opensvg-4").style.display = "block";
  } else {
    FaqVarFour.style.display = "block";
    document.getElementById("closesvg-4").style.display = "block";
    document.getElementById("opensvg-4").style.display = "none";
  }
}
function toggleClickFive() {
  let FaqVarFive = document.getElementById("answerFive");
  if (FaqVarFive.style.display == "block") {
    FaqVarFive.style.display = "none";
    document.getElementById("closesvg-5").style.display = "none";
    document.getElementById("opensvg-5").style.display = "block";
  } else {
    FaqVarFive.style.display = "block";
    document.getElementById("closesvg-5").style.display = "block";
    document.getElementById("opensvg-5").style.display = "none";
  }
}
function toggleClickSix() {
  let FaqVarSix = document.getElementById("answerSix");
  if (FaqVarSix.style.display == "block") {
    FaqVarSix.style.display = "none";
    document.getElementById("closesvg-6").style.display = "none";
    document.getElementById("opensvg-6").style.display = "block";
  } else {
    FaqVarSix.style.display = "block";
    document.getElementById("closesvg-6").style.display = "block";
    document.getElementById("opensvg-6").style.display = "none";
  }
}
function toggleClickSeven() {
  let FaqVarSeven = document.getElementById("answerSeven");
  if (FaqVarSeven.style.display == "block") {
    FaqVarSeven.style.display = "none";
    document.getElementById("closesvg-7").style.display = "none";
    document.getElementById("opensvg-7").style.display = "block";
  } else {
    FaqVarSeven.style.display = "block";
    document.getElementById("closesvg-7").style.display = "block";
    document.getElementById("opensvg-7").style.display = "none";
  }
}
function toggleClickEight() {
  let FaqVarEight = document.getElementById("answerEight");
  if (FaqVarEight.style.display == "block") {
    FaqVarEight.style.display = "none";
    document.getElementById("closesvg-8").style.display = "none";
    document.getElementById("opensvg-8").style.display = "block";
  } else {
    FaqVarEight.style.display = "block";
    document.getElementById("closesvg-8").style.display = "block";
    document.getElementById("opensvg-8").style.display = "none";
  }
}

function logWindowOffset() {
  const offsetY = window.scrollY;
  if (offsetY < 1050 || offsetY > 2500) {
    console.log("get the viewport");
    var i = 0;
    function prograssNumOne() {
      if (i == 0) {
        i = 1;
        var getPrograssId = document.getElementById("number-progress-one");
        var length = 49999920;
        getPrograssId.innerHTML = formatNumber(length);
        var id = setInterval(frame, 10);
        function frame() {
          if (length >= 50000000) {
            clearInterval(id);
          } else {
            length++;
            getPrograssId.innerHTML = formatNumber(length);
          }
        }
      }
    }
    prograssNumOne();
  }
}
if (typeof window !== window) {
  window.addEventListener("scroll", logWindowOffset);
}
function newviewport() {
  const newoffsetY = window.scrollY;
  if (newoffsetY > 1050) {
    var i = 0;
    function prograssNumOne() {
      if (i == 0) {
        i = 1;
        var getPrograssId = document.getElementById("number-progress-one");
        var length = 49999920;
        getPrograssId.innerHTML = formatNumber(length);
        var id = setInterval(frame, 10);
        function frame() {
          if (length >= 50000000) {
            clearInterval(id);
          } else {
            length++;
            getPrograssId.innerHTML = formatNumber(length);
          }
        }
      }
    }
    prograssNumOne();
    console.log(newoffsetY, "get the portview");
  }
}
newviewport();

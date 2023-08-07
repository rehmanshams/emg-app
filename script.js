const allAnswers = document.getElementsByClassName("faq-answer");

function toggleAnswer(id) {
  const answerElement = document.getElementById(`faq-answer-${id}`);
  const crossssvg = document.getElementById(`crosssvg-${id}`);
  const openssvg = document.getElementById(`opensvg-${id}`);

  for (let i = 0; i < allAnswers.length; i++) {
    if (allAnswers[i] !== answerElement) {
      allAnswers[i].style.display = "none";
    }
  }

  if (answerElement.style.display === "block") {
    answerElement.style.display = "none";
    crossssvg.style.display = "none";
    openssvg.style.display = "block";
  } else {
    answerElement.style.display = "block";
    crossssvg.style.display = "block";
    openssvg.style.display = "none";
  }
}

function showopen() {
  if (openssvg.style.display == "none") {
    return openssvg.style.display == "block";
  }
}
// Initially hide all the answers
for (let i = 0; i < allAnswers.length; i++) {
  allAnswers[i].style.display = "none";
}

const video = document.getElementById("custom-video");
const playPauseButton = document.getElementById("play-pause-button");
function togglePlayPause() {
  console.log("hit");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

if (video) {
  video.addEventListener("mouseover", showPauseButton);
  video.addEventListener("mouseout", hidePauseButton);
}

function showPauseButton() {
  console.log("hit11");
  const myImage = document.getElementById("f");
  myImage.src = "./images/pause-icon";
}

function hidePauseButton() {
  const myImage = document.getElementById("f");
  myImage.src = "./images/player_icon.png";
}
// const faqsecData = [

// ];
const faqData = [
  {
    id: 1,
    question: "What is MNTN Performance TV advertising?",
    answer: "Answer Number One",
  },
  {
    id: 2,
    question:
      "How does MNTN Performance TV differ from Traditional TV adversing?",
    answer: "Answer Number Two",
  },
  {
    id: 3,
    question:
      "On what networks and devices can i advertise using MNTN Performance TV?",
    answer: "Answer Number Three",
  },
  {
    id: 4,
    question:
      "What does it take to get started with MNTN Performance TV Advertising?",
    answer: "Answer Number Four",
  },
  {
    id: 5,
    question:
      "What does MNTN Performance TV compare to Paid Search Advertising?",
    answer: "Answer Number Five",
  },
  {
    id: 6,
    question:
      "Can i use my existing video assets for MNTN Performance TV Advertising?",
    answer: "Answer Number Six",
  },
  {
    id: 7,
    question: "What is OTT Advertising?",
    answer: "Answer Number Seven",
  },
  {
    id: 8,
    question:
      "What does it take to get started with MNTN Performance TV Advertising?",
    answer: "Answer Number Eight",
  },
];
const faqContent = document.getElementById("faq-content");

const showInHtml = faqData.map((item) => {
  return `
  <div class="">
  <div
    class="flex justify-between border-b border-[#DCE6FF] pb-6"
  >
  <div class="flex flex-col gap-8">
    <p class="text-black text-2xl leading-8 font-medium">
      ${item.question}
    </p>
    <p id="answer-${item.id}" class="hidden">
    ${item.answer}
    </p>

    </div>
    <div
    class="cursor-pointer"
    onclick="togglefun(${item.id})"
    >
    
      <svg
        id="open-${item.id}"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 4V20"
          stroke="#0A2463"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 12H4"
          stroke="#0A2463"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
      class="hidden"
      id="close-${item.id}"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12H6"
        stroke="#0A2463"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    </div>
  </div>
</div>
    `;
});

if (faqContent) faqContent.innerHTML = showInHtml.join("");
let currentFaq = 0;
function togglefun(id) {
  // const getanswer = document.getElementById("answer-id");
  if (currentFaq == id) {
    currentFaq = 0;
    document.getElementById(`answer-${id}`).classList.add("hidden");
    document.getElementById(`close-${id}`).style.display = "none";
    document.getElementById(`open-${id}`).style.display = "block";
    // console.log("first", document.getElementById("answer-id"));
  } else {
    currentFaq = id;
    document.getElementById(`answer-${id}`).classList.remove("hidden");
    document.getElementById(`close-${id}`).style.display = "block";
    document.getElementById(`open-${id}`).style.display = "none";
    // console.log("first", document.getElementById("answer-id"));
  }
}

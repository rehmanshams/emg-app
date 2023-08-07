const Faqdata = [
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
const myContent = document.getElementById("myContent");

const showInHtml = Faqdata.map((item, id) => {
  return `
  <div key="${id}" class="">
  <div
    class="flex justify-between border-b border-[#DCE6FF] pb-6"
  >
  <div class="flex flex-col gap-8">
    <p class="text-black text-2xl leading-8 font-medium">
      ${item.question}
    </p>
    <p id="answer-id" class="hidden">
    ${item.answer}
    </p>

    </div>

    <div
    id="0" 
    class="cursor-pointer"
    onclick="togglefun(${item.id})"
    >
      <svg
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
    </div>
  </div>
</div>
    `;
});

myContent.innerHTML = showInHtml.join("");
let currentFaq = 0;
function togglefun(id) {
  // const getanswer = document.getElementById("answer-id");
  if (currentFaq == id) {
    currentFaq = 0;
    document.getElementById("answer-id").classList.add("hidden");
    // console.log("first", document.getElementById("answer-id"));
  } else {
    currentFaq == id;
    document.getElementById("answer-id").classList.remove("hidden");
    // console.log("first", document.getElementById("answer-id"));
  }
  console.log(id, "get the hmt");
}
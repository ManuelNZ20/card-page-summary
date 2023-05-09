const btnProceed = document.querySelector(".btn-proceed");
const btnCancel = document.querySelector(".btn-cancel");

btnProceed.addEventListener("click", () => {
  if (!btnProceed.classList.contains("btn-proceed")) {
    functionMove(btnProceed, btnCancel);
  }
});

btnCancel.addEventListener("click", () => {
  functionMove(btnCancel, btnProceed);
});

const functionMove = (btnA, btnB) => {
  btnA.classList.remove("btn-cancel");
  btnA.classList.add("btn-proceed");
  btnB.classList.remove("btn-proceed");
};

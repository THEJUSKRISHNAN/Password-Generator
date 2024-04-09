let generatePassword = document.querySelector(".generate-password");
let passwordInput = document.querySelector(".passwordInput");
let copybtn = document.querySelector(".copybtn");
let rangeInput = document.querySelector("#rangeInput");
let rangeValue = document.querySelector("#rangeValue");
let options = document.querySelectorAll(".options");

const characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  loverCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialCharacters: "#$&~`!@^()_-+{}[]<>?*",
};

copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);

  copybtn.style.color = "green";
});

generatePassword.addEventListener("click", () => {
  copybtn.style.color = "black";
  passwordInput.value = "";
  let randomPassword = "";
  let strongPassword = "";
  options.forEach((option) => {
    if (option.checked) {
      randomPassword += characters[option.id];
    }
  });

  if (randomPassword !== "") {
    for (let i = 0; i < rangeInput.value; i++) {
      let chatAt =
        randomPassword[Math.floor(Math.random() * randomPassword.length)];
      strongPassword += chatAt;
    }
  }
  passwordInput.value = strongPassword;
});

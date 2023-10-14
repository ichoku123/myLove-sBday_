document.addEventListener("DOMContentLoaded", function () {
  const showFormButton = document.getElementById("showFormButton");
  const passcodeForm = document.getElementById("passcodeForm");
  const passcodeInputForm = document.getElementById("passcodeInputForm");
  const errorText = document.getElementById("errorText");

  showFormButton.addEventListener("click", function () {
    showFormButton.style.display = "none";
    passcodeForm.style.display = "block";
  });

  passcodeInputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const passcodeInput = document.getElementById("passcode").value;
    if (passcodeInput === "4554") {
      alert("Passcode is correct!");
    } else {
      errorText.style.display = "block";
    }
  });
});

//----
document.addEventListener("DOMContentLoaded", function () {
  const showFormButton = document.getElementById("showFormButton");
  const passcodeForm = document.getElementById("passcodeForm");
  const passcodeInputForm = document.getElementById("passcodeInputForm");
  const errorText = document.getElementById("errorText");
  const surprise = document.getElementById("surprise");
  const writeUpButton = document.getElementById("writeUpButton");
  const viewSurpriseButton = document.getElementById("viewSurpriseButton");

  showFormButton.addEventListener("click", function () {
    showFormButton.style.display = "none";
    passcodeForm.style.display = "block";
  });

  passcodeInputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const passcodeInput = document.getElementById("passcode").value;
    if (passcodeInput === "4554") {
      passcodeForm.style.display = "none";
      surprise.style.display = "block";
    } else {
      errorText.style.display = "block";
    }
  });

  writeUpButton.addEventListener("click", function () {
    // Handle the "Write-Up" button click (e.g., navigate to a write-up page).
  });

  viewSurpriseButton.addEventListener("click", function () {
    // Handle the "View Surprise" button click (e.g., display the surprise content).
  });
});

//js-Write-UP

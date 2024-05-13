const outputParagraph = document.querySelector("#output");
  const changeTextButton = document.querySelector("#changeTextBtn");
  const revertTextBtn = document.querySelector("#revertTextBtn");
  


  changeTextButton.addEventListener("click", function() {
    outputParagraph.textContent = "Hello, World!";
  });

  revertTextBtn.addEventListener('click', function() {
    outputParagraph.textContent = "Click the button to change this text.";
 
  });
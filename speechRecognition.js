if ("webkitSpeechRecognition" in window) {
  //  Waiting
  let speechRecognition = new webkitSpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  var language = document.querySelector(".form-select").value;
  speechRecognition.lang = language;

  // speechRecognition.lang = "en-us";
  speechRecognition.onStart = () => {
    console.log("Running");
    document.getElementById("listening").style.display = "block";
  };
  speechRecognition.onend = () => {
    document.getElementById("listening").style.display = "none";
  };
  speechRecognition.onerror = () => {
    document.getElementById("listening").style.display = "none";
    alert("Please check the Permission for mic and try again");
    document.title = "Speech Recognition";
  };
  let finalResult = "";
  speechRecognition.onresult = (event) => {
    console.log(event);
    let interimResult = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalResult += event.results[i][0].transcript;
      } else {
        interimResult += event.results[i][0].transcript;
      }
    }

    document.querySelector("#floatingTextarea2").innerHTML = interimResult;
    document.querySelector("#floatingTextarea2").innerText = finalResult;
  };
  document.querySelector(".buttonStart").onclick = () => {
    // Start the Speech Recognition
    console.log("Working button");
    document.title = "Listening...";
    speechRecognition.start();
  };

  document.querySelector(".buttonStop").onclick = () => {
    // Start the Speech Recognition
    document.title = "Speech Recognition";

    speechRecognition.stop();
  };
  function startRec() {
    console.log("Running Start button");
    // speechRecognition.start();
  }
} else {
  console.log("Not Compatible with app");
  alert(
    "This browser is not compatible with this app, Sorry please make inform to developer : https://github.com/civdix"
  );
}

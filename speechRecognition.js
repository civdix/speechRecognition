if ("webkitSpeechRecognition" in window) {
  //  Waiting
  let speechRecognition = new webkitSpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = "en-GB";
  // speechRecognition.lang = "en-us";
  speechRecognition.onStart = () => {
    console.log("Running");
    document.getElementById("listening").style.display = "block";
    document.title = "Listening...";
  };
  speechRecognition.onend = () => {
    document.getElementById("listening").style.display = "none";
    document.title = "Speech Recognition";
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

    document.querySelector(".finalResult").innerHTML = finalResult;
    document.querySelector(".interimResult").innerHTML = interimResult;
  };
  document.querySelector(".buttonStart").onclick = () => {
    // Start the Speech Recognition
    console.log("Working button");
    speechRecognition.start();
  };

  document.querySelector(".buttonStop").onclick = () => {
    // Start the Speech Recognition
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

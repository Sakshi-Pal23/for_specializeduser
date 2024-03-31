const startBtn = document.querySelector("#start-btn");

const recognition = new window.webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {
    recognition.start();
});

let utter = new SpeechSynthesisUtterance("Hi, how are you?");
utter.onend = () => {
    recognition.start();
};

recognition.onresult = (e) => {
    console.log(e.results[e.results.length - 1][0].transcript);
    // document.write(e.results[e.results.length - 1][0].transcript);
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    if (transcript === "hello") {
        recognition.stop();
        utter.text = "Hi, how are you?";
        synth.speak(utter);
    } else if (transcript === "goodbye") {
        recognition.stop();
        utter.text = "Hope to see you soon";
        synth.speak(utter);
    } else if (transcript === "thank you") {
        recognition.stop();
        utter.text = "Welcome, whenever you need my help just ask me.";
        synth.speak(utter);
    } else if (transcript === "can you help me with something") {
        recognition.stop();
        utter.text = "Yes, Please procede with your question?";
        synth.speak(utter);
    } else if (transcript === "what is my name") {
        recognition.stop();
        utter.text = "Your name is Sakshi Pal";
        synth.speak(utter);
    } else if (transcript === "what are the names of my teammates") {
        recognition.stop();
        utter.text = "Aryan Kumar Rana, Akshat Kumar Kakran and Jatin Kumar";
        synth.speak(utter);
    } else if (transcript === "please spell my roll number") {
        recognition.stop();
        utter.text = "2100680130019";
        synth.speak(utter);
    } else if (transcript === "define yourself") {
        recognition.stop();
        utter.text = "a computer program designed to simulate conversation with human users, especially over the internet chatbots often treat conversations like they are a game of tennis: talk, reply, talk, reply";
        synth.speak(utter);
    } else if (transcript === "who is your developer") {
        recognition.stop();
        utter.text = "Mr. Aryan Kumar Rana";
        synth.speak(utter);
    } else if (transcript === "Jay Shri Ram") {
        recognition.stop();
        utter.text = "Jai shree raam";
        synth.speak(utter);
    } else {
        recognition.stop();
        utter.text = "Try asking something else" || "alpha";
        synth.speak(utter);
    }
    
};
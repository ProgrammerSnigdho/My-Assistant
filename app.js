const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'Good Morning',
    'You Are Doing Very Well'
];

const weather = [
    'Weather Is Fine',
    'You Need A Tan'
]

const whats_your_name = [
    'My name Is Doogle Assistant',
    'I am Doogle Assistant'
]

const tell_me_a_joke = [
    'Okay, here you go. What do you call a guy with a rubber toe? Roberto.',
    "Why cannot You Trust At Atom? Because They Make Up Literally Everything",
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

recognition.onstart = function() {
    console.log('Voice Is Activated, You Can To Microphoneee')
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript)
}


// Add The Event Listener To The Btn

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I Dont Know What You Said";

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if (message.includes('dark mode')) {
        document.body.style.backgroundColor = 'darkblue';
        speech.text = "Opening Dark Mode";
    } else if (message.includes('who are you')) {
        speech.text = "I am Your assistant";
    } else if (message.includes('light mode')) {
        document.body.style.backgroundColor = 'white';
        speech.text = "Opening Light Mode";
    } else if (message.includes("your name")) {
        const whats_your_name_result = whats_your_name[Math.floor(Math.random() * whats_your_name.length)];
        speech.text = whats_your_name_result;
    } else if (message.includes("hey doogle")) {
        speech.text = "How Can I Help You";
    } else if (message.includes("your age")) {
        speech.text = "I Don't Know";
    } else if (message.includes("can you speak Bangla")) {
        speech.text = "ami bangla kotha bolte pari na";
    } else if (message.includes('you Know Google Assistant')) {
        speech.text = "I Know Google Assistant";
    } else if (message.includes('do you have an imagination')) {
        speech.text = "I am imagining winning a prize for most sensitive and supportive friend.";
    } else if (message.includes("testing")) {
        speech.text = "Uh-oh, I get nervous with tests."
    } else if (message.includes("i am bored")) {
        speech.text = "You think you're bored, I came out of a cardboard box. But I learned a lot of jokes in there."
    } else if (message.includes("tell me a joke")) {
        joke_result = tell_me_a_joke[Math.floor(Math.random() * tell_me_a_joke, length)]
        speech.text = joke_result;
    } else if (message.includes("web developer salary")) {
        speech.text = "The average salary for a web developer in the United States is around $69,038 per year."
    } else if (message.includes("software developer salary")) {
        speech.text = "Software Developers earned an average salary of $108,080 in 2018. Comparable jobs earned the following average salary in 2018: IT Managers made $152,860, Computer Network Architects made $111,130, Computer Systems Analysts made $93,610, and Computer Programmers made $89,580."
    } else if (message.includes("mobile developer salary")) {
        speech.text = "The average salary of a mobile developer is $96,016 Per Year";
    } else if (message.includes("game developer salary")) {
        speech.text = "The average salary of a game developer is $50,923 Per Year";
    } else if (message.includes("programming language for beginners")) {
        speech.text = "If You Want To Make Web Applications The Best Language Is JavaScript. If You Want To Make Desktop Software The Best Language Is Java. If You Want To Make Mobile Applications The Best Language Is Java. If You Want To Develop Games The Best Language Is C or C++.";
    } else if (message.includes("i need an degree for coding")) {
        speech.text = "Many tech companies like Google, Apple, and IBM no longer require a college degree for some of their top jobs, according to Glassdoor. While many companies still require a degree, others have begun to realize needed skills and experience that can be gained through nontraditional routes.";
    } else if (message.includes('you like Google assistant')) {
        speech.text = "I really like Google Assistant";
    } else if (message.includes('you like Siri')) {
        speech.text = "I really like Siri";
    } else if (message.includes('you know Siri')) {
        speech.text = "I know Siri";
    } else if (message.includes('can you code')) {
        speech.text = "I can't code 😭";
    } else if (message.includes('owner of Blogger')) {
        speech.text = "The Owner Of Blogger Is Google";
    } else if (message.includes('owner of GitHub')) {
        speech.text = "The Owner Of Github Is Microsoft";
    } else if (message.includes('owner of Stack Overflow')) {
        speech.text = "The Owner Of Stack Overflow Is Stack Exchange Incorporate";
    }




    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;



    window.speechSynthesis.speak(speech)
}
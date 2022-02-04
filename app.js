//get me the button (translate button) which wil translate
var btnTranslate = document.querySelector("#btn-translate");

//get me the input 
var txtInput = document.querySelector("#txt-input");

//get me the output
var outputDiv = document.querySelector("#output");


//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


//we need a server URL that actually translates the lines by user
var serverURL = "https://api.funtranslations.com/translate/minion.json"


//we define a function : whenever we want to convert a text(input)
//we will take serverURL, add "?" to it, add a key-value "text=" + input
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

//this is how we will handle error, when error occurs, show an alert
function errorHandler(error) {
    console.log("error occured", error)
    alert("server is down, try again after some time.")
}


//we define a function : What to do when a click happens
//we read the value of input text 
//then go and "fetch" the URL, then convert the response to response.json
//from the json value, take translated text and show this as output
function clickHandler() {
    //outputDiv.innerText = "abakjfkjsdhfkjh: " + txtInput.value;

    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())

        //puts output on console
        //.then(json => console.log(json.contents.translated))

        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })

        //if above deos not work, catch an error
        .catch(errorHandler)
}

//when there is a click, run the function named as clickHandler
btnTranslate.addEventListener("click", clickHandler())
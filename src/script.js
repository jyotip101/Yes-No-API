const buttonElement = document.querySelector('#but');
const input = document.querySelector('#inputField');
const funcOutput = document.querySelector('#answer');
const errorMesg = document.querySelector('#errorMesg');
const handleEvtOutput = document.querySelector('#output-contant');
 // API
const API = 'https://yesno.wtf/api';

let isRequesting = false;
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
const setRequesting = value => {
    isRequesting = value;
}

// disbaled button
const disabledButton = (value) => {
    if(value){
        buttonElement.setAttribute('disabled', 'disabled');
    }else{
        buttonElement.removeAttribute('disabled');
    }
}

// show answer
const answerShow = (ans) =>{
    setTimeout(()=>{
        funcOutput.innerHTML =  ans;
        handleEvtOutput.classList.remove('shakeAns');
        clearResponse(); 
    }, 500);
}
// show error
const showError= () =>{
    errorMesg.innerHTML = "Type your question here";
    setTimeout(() => {
        errorMesg.innerHTML = "";
    }, 1000);
     
}
// clear response
const clearResponse = () =>{
    setTimeout(() => {
        funcOutput.innerHTML =  "";
        input.value = '';
        setRequesting(false);
        disabledButton(false);
    }, 3000);
}  


// get data from api
const fetchData = () =>{
    setRequesting(true);
    disabledButton(true);
    handleEvtOutput.classList.add('shakeAns');

    fetch(API)
    .then(response => response.json())
    .then(data => answerShow(data.answer));
}

const getAnswer= () =>{
    if(isRequesting) return;
    if(!input.value) return showError();

    fetchData();
}
// on Key press Event
const keyEvent = (e) =>{   
    if ( e.key === "Enter") {
        getAnswer();
    }
}
// Buttton press Event
buttonElement.addEventListener('click', getAnswer);
   
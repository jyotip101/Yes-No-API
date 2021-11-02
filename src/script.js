const buttonElement = document.querySelector('#but');
const input = document.querySelector('#inputField');
const funcOutput = document.querySelector('#answer');
const handleEvtOutput = document.querySelector('#output-contant');
 
// const dataSet = [];
const answerShow = (ans) =>{
    setTimeout(()=>{
        funcOutput.innerHTML =  ans;
        handleEvtOutput.classList.remove('shakeAns');
    }, 500);
}
const fetchData = () =>{
    
    handleEvtOutput.classList.add('shakeAns');

    fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => answerShow(data.answer))
    .catch(error => console.error(error));
}

// on Key press Event
const keyEvent = (e) =>{  
    if (!input.value) return ;

    if ( e.key === "Enter") {
        fetchData();
    }
}
// Buttton press Event
buttonElement.addEventListener('click', () =>{ 
    if (!input.value){
        return;
    } else {
        fetchData(); 
    }
});
   
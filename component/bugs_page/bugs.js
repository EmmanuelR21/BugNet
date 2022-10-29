// Document variables
const querrybtn = document.querySelector('.querrybtn')

// Event Listeners

querrybtn.addEventListener('click', pullBugs) //THIS SHOULD BE CHANGED TO LOAD NOT CLICK

// Functions

async function pullBugs() {
    const response = await fetch(`http://localhost:5432/bugs/Meta`) //THE WORD 'META' NEEDS TO CHANGE DEPENDING ON 
    const json = await response.json()
    console.log(json) //THE PAGE SHOULD CHANGE DEPENDING ON WHAT IS RECIEVED FROM THE json VARIABLE
}
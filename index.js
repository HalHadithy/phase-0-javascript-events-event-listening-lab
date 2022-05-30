

function addingEventListener() {
    const input = document.getElementById('input');
    function clickAlert(){alert("I was clicke!");}
    input.addEventListener("click", clickAlert);
}

addingEventListener();
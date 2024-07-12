let number = document.querySelectorAll(".numbers");
let interval = 5000;
number.forEach(element => {
    let start = 0;
    let end = parseInt(element.getAttribute("data-val"));
    let d = Math.floor(interval/end);
    let counter = setInterval(
        function(){
            start=start+1;
            element.textContent =start;
            if(start==end){
                clearInterval(counter)
            }
        },d
    )
});
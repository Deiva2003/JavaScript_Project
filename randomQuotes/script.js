let list = {
    data:[
        {
            quotes:"To love oneself is the beginning of a lifelong romance."
        },
        {
            quotes:"Almost everything will work again if you unplug it for a few minutes, including you."
        },
        {
            quotes:"Time you enjoy wasting is not wasted time."
        },
        {
            quotes:"Being happy never goes out of style."
        },
        {
            quotes:"No one can make you feel inferior without your consent."
        },
        {
            quotes:"True abundance isn’t based on our net worth, it’s based on our self-worth."
        },
    ]
}
for( let i of list.data){
    let btn = document.getElementById("btn");
    let quotesItems = document.getElementById("quotesItems");
    btn.onclick = function() {
        let randomQuote = Math.floor(Math.random() * list.data.length);
        quotesItems.innerText=list.data[randomQuote].quotes;
    };
}

let items={ 
    data:[
    {
        img:"shirt-1.png",
        category:"shirts",
        rate:"$20",
    },
    {
        img:"shirt-2.jpg",
        category:"shirts",
        rate:"$20",
    },
    {
        img:"pant-1.jpg",
        category:"pants",
        rate:"$20",
    },
    {
        img:"pant-2.png",
        category:"pants",
        rate:"$20",
    },
    {
        img:"shorts-1.jpg",
        category:"shorts",
        rate:"$20",
    },
    {
        img:"shorts-2.jpg",
        category:"shorts",
        rate:"$20",
    },
],
};

for( let i of items.data){
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imgCont");
    let image = document.createElement("img");
    image.setAttribute("src",i.img);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let name = document.createElement("h6");
    name.classList.add("pn");
    name.innerText=i.category;
    card.appendChild(name);
    let rate = document.createElement("h5");
    rate.innerText=i.rate;
    card.appendChild(rate);
    document.getElementById("display").appendChild(card);

    window.onload=()=>{
        searchfn("all");
    }

    function searchfn(value){
        let cardd = document.querySelectorAll(".card");
        cardd.forEach((el)=>{
            if(value=="all"){
                el.classList.remove("hide");
            }
            else{
                if(el.classList.contains(value)){
                    el.classList.remove("hide");
                }
                else{
                    el.classList.add("hide");
                }
            }
        })
    }
    document.getElementById("searchBtn").onclick = function(){
        let searchText = document.getElementById("searchText").value;
        let itemc = document.querySelectorAll(".pn")
        let cardd = document.querySelectorAll(".card");
        itemc.forEach((el,index)=>{
            if(el.innerText.includes(searchText)){
                cardd[index].classList.remove("hide");
            }
            else{
                cardd[index].classList.add("hide");
            }
        })
    }
}
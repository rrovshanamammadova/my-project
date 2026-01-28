let container=document.getElementsByClassName("container")[0];
let products=[{
    img:"https://marvelofficial.com/wp-content/uploads/2020/09/B83A6311-14AE-4E5B-A1A4-48D7C101E4D3.jpeg",
    cardname:"Mark 5 Iron Man Helmet 1:1 Replica",
    price:"410.75$",
    author:"IronMan",
    btn:"Add to basket",
},

{
    img:"https://marvelofficial.com/wp-content/uploads/2020/04/B986AAA5-F257-4821-BA16-3CD931E57E4A.jpeg",
    cardname:"Real Metal Captain America Shield Replica",
    price:"469.75$",
    author:"Captain America",
    btn:"Add to basket", 
},

{
    img:"https://marvelofficial.com/wp-content/uploads/2020/10/1030357.jpg",
    cardname:"Full Metal Thor Hammer Mjolnir Prop Replica",
    price:"330.75$",
    author:"Thor",
    btn:"Add to basket",
},

{
    img:"https://marvelofficial.com/wp-content/uploads/2020/01/F04D6EE6-EC96-4CE0-B74E-14D487499BDC.jpeg",
    cardname:"Loki Helmet Prop Replica",
    price:"79.25$",
    author:"Loki",
    btn:"Add to basket",
},

{
    img:"https://marvelofficial.com/wp-content/uploads/2020/10/img_9201.jpg",
    cardname:"Collectible Iron Spider Action Figure 21cm",
    price:"55.99$",
    author:"SpiderMan",
    btn:"Add to basket",
},

{
    img:"https://marvelofficial.com/wp-content/uploads/2019/11/ACC80F80-744C-4034-B156-02A43419F706.jpeg",
    cardname:"Thanos Infinity Stones Ring",
    price:"330.75$",
    author:"Thanos",
    btn:"Add to basket"
}
]
container.innerHTML="";
for(let i=0; i<products.length; i++){
    container.innerHTML+=`
    <div class="card">
            <div>
                <img src="${products[i].img}" alt="" class="img">
            </div>
            <div class="texts">
                <p class="price">${products[i].price}</p>
                <h2 class="cardname">${products[i].cardname}</h2>
                <p class="author">${products[i].author}</p>
                <a href="" class="btn">${products[i].btn}</a>
            </div>
        </div>
    `
}
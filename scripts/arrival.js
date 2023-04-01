function findme(){
    if(event.key==="Enter"){
        let searchbar=document.querySelector(".Drop_search").value
        if(searchbar=="newarrival"){
            window.location.href="newarrival.html"
        }else if(searchbar=="cart"){
            window.location.href="cart.html"
        }else if(searchbar=="signup"){
            window.location.href="signup.html"
        }else if(searchbar=="home"){
            window.location.href="index.html"
        }
    }
   }

fethdata()
async function fethdata(){
    try {
        let response=await fetch("http://localhost:7900/get");
        if(response.ok){
            let res=await response.json();
            console.log(res);
            displayProduct(res.data)
        }
    } catch (error) {
        console.log(error);
    }
}

let container =document.getElementById("bac_data")
function displayProduct(data){
    data.forEach((element)=>{
        let card =document.createElement("div")
        card.setAttribute("class","api_div")

        let image=document.createElement("img")
        image.setAttribute("src",element.image);
        image.setAttribute("class","api_img")

        let div =document.createElement("div")

        let desc=document.createElement("p")
        desc.setAttribute("class","desc_name")

        let btn=document.createElement("button");
        btn.setAttribute('class',"cartbtn");
        btn.innerText="QUICK SHOP"

        desc.innerText=element.desc
        div.append(desc)
        let gender=document.createElement("p")
        gender.setAttribute("class","gender")
        gender.innerText=element.additional
      
        let price=document.createElement("p")
        price.setAttribute("class","price_name")
        price.innerText=element.price
       
        card.append(image,div,gender,price,btn)
        container.append(card)

    })
}
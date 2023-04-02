fethdata()
async function fethdata(){
    try {
        let response=await fetch("http://localhost:7900/get/women");
        if(response.ok){
            let res=await response.json();
            console.log(res);
            displayProduct(res.data)
        }
    } catch (error) {
        console.log(error);
    }
}

let containe =document.getElementById("bac_data")
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
        btn.addEventListener("click",(e)=>{
            alert("Product Added To Cart")
            console.log("obje")
            cartfetch(element)
        })

        desc.innerText=element.desc
        div.append(desc)
        let gender=document.createElement("p")
        gender.setAttribute("class","gender")
        gender.innerText=element.additional
      
        let price=document.createElement("p")
        price.setAttribute("class","price_name")
        price.innerText=element.price
       
        card.append(image,div,gender,price,btn)
        containe.append(card)

    })
}

async function  cartfetch(element){
    try {
        console.log(element)
        const res=fetch("http://localhost:7900/cart/post",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(element)
        });
        if(res.ok){
            const result=await res.json();
            console.log(result);
            window.location.href="./cart.html"
        }

    } catch (error) {
        console.log(error);
    }
}
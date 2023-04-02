document.querySelector("#form").addEventListener("submit",function(e){
e.preventDefault()
let name=document.querySelector("#name").value
let email=document.querySelector("#email").value
let number=document.querySelector("#phonenum").value
let pass=document.querySelector("#pass").value
if(name==""||email==""||number==""||pass==""){
   alert("Please fill the form")
}else{
    let obj={name,email,number,pass};
    console.log(obj)
    signup_fetch(obj)
}
})
async function signup_fetch(obj){
    try {
        let responce =await fetch("http://localhost:7900/signup",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        });
        if(responce.ok){
            let res=await responce.json()
            alert(res.msg)
            window.location.href="./login.html"
            console.log(res)
        }
    } catch (error) {
        console.log(error)
        
    }
}
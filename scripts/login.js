document.querySelector("form").addEventListener("subit",(e)=>{
e.preventDefault()
let email=document.querySelector("#useremail").value
let password=document.querySelector("userpassword").value
if(email==""&&el.password==""){
  alert("Fill the all credentials")

}else{
    let obj={email,password}
    loginFetch(obj)
}
})

async function  loginFetch(obj){
    try {
        let responce =await fetch ("http://localhost:5600/login",{
           method:"POST",
           headers:{
            'Content-Type':"Application/json"
           },
           body:JSON.stringify(obj)
        })
        if(responce.ok){
            let ans=await responce.json()
            alert(ans.msg);
            localStorage.setItem("token",ans.token)
            window.location.href="./home.html"
            console.log(ans)
        }
    } catch (error) {
        console.log(error)
    }
}

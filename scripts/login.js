document.querySelector("#formlogin").addEventListener("submit",(e)=>{
e.preventDefault()
let email=document.querySelector("#useremail").value
let pass=document.querySelector("#userpassword").value
if(email=="" && pass==""){
  alert("Fill the all credentials")

}else{
    let obj={email,pass}
    loginFetch(obj)
}
})

async function  loginFetch(obj){
    try {
        let responce =await fetch ("http://localhost:7900/login",{
           method:"POST",
           headers:{
            'Content-Type':"Application/json",
            Authorization:JSON.parse(localStorage.getItem("token"))
           },
           body:JSON.stringify(obj)
        })
        if(responce.ok){
            let ans=await responce.json()
            console.log(ans)
            alert(ans.msg);
            localStorage.setItem("token",ans.token)
            // window.location.href="./index.html"
            console.log(ans)
        }
    } catch (error) {
        console.log(error)
    }
}

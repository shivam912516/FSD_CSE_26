function register (){
    setTimeout(()=>{
        console.log("register here")
    },1000
)
    

}
function login(){
    setTimeout(()=>{
        console.log("Login here")

    },500)
    
}
function getData(){
    setTimeout(()=>{
        console.log("fetch data from DB")
    },4000)
    
}
function displayData(){
    setTimeout(()=>{
        console.log("view user data")

    },6000)
   
}

register();
login();
getData();
displayData();
console.log("call another application")
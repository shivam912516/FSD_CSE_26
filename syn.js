function register (){
    waitfordelay(1000);
    console.log("register here")

}
function login(){
    waitfordelay(500);
    console.log("Login here")
}
function getData(){
    waitfordelay(4000);
    console.log("fetch data from DB")
}
function displayData(){
    waitfordelay(6000);
    console.log("view user data")
}
function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){
        
    }
}
register();
login();
getData();
displayData();
console.log("call another application")
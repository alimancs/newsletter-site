
function subscribeUser() {
    const email = document.querySelector("#emlbox");
    let val = email.value;
    if ((val.includes("@")===false && val.includes(".com")===false)||(val==="")) {
        Subscription("false");
        errorShow();
        
 
    } else {
        localStorage.setItem("emailval", val);
        Subscription("true");
    }

}
function errorShow() {
    const email = document.querySelector("#emlbox");
    const errorM = document.querySelector("#err");
    errorM.style.display = "inline";
    email.style.border = "1.4px solid red";
    email.style.backgroundColor = "rgb(254, 163, 163)";
}
function Subscription(status) {
    const link = document.querySelector("#linktag");
    if (status==="false") {
       link.href="#";
    } else if (status==="true") {
        link.href="ms.html";
    }
}
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanguage("arabic");
    localStorage.setItem("Lang","arabic");
}
english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("Lang","english");
};
onload = ()=>{
    setLanguage(localStorage.getItem("Lang"));
};
function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        title.innerHTML = " خضر علي" ;
        welcome.innerHTML = " أنا مبرمج واجهات للويب " ;
        about.innerHTML = "  حولنا" ;
        aboutText.innerHTML = " أنا مبرمج واجهات للويب " ;
        contact.innerHTML = " اتصل بي " ;
    }else if (getLanguage === "english"){
        title.innerHTML = "  Khoder Ali" ;
        welcome.innerHTML = " I am a Web Designer Front Back" ;
        about.innerHTML = "  About Us" ;
        aboutText.innerHTML = "  I am a Web Designer Front Back " ;
        contact.innerHTML = "  Contact Us " ;  
    }
}
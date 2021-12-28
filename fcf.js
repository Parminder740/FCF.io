
var registerPageCLassRef;

document.querySelector("#show-login").addEventListener("click",function(){
    registerPageCLassRef.add("active");
});

function togglePopup(comingFor){
    registerPageCLassRef =  document.querySelector(".register-page").classList
    if(comingFor === 'Add'){
        registerPageCLassRef.add("active");
    }else if(comingFor === 'Remove'){
        registerPageCLassRef.remove("active");
    }
}
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector("container");

sign_up_btn.addEventListener("click", ()  =>{
    container.classlist.add("sign-up-moda");
});

sign_in_btn.addEventListener("click", ()  =>{
    container.classlist.remove("sign-in-moda");
});
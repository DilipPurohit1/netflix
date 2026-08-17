document.querySelectorAll(".faq-item button").forEach(btn=>{

btn.addEventListener("click",()=>{

const item=btn.parentElement;

item.classList.toggle("active");

const icon=btn.querySelector("i");

icon.classList.toggle("fa-plus");
icon.classList.toggle("fa-xmark");

});

});
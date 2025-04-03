const overlayForm = document.querySelector("#form-overlay");
const btnFinish = document.querySelector("#finish");
const iconCloseForm = document.querySelector("#icon-close");
const btnCancelForm = document.querySelector("#btn-cancel");

btnFinish.addEventListener('click',function(){
    overlayForm.style.display = "flex";
});

iconCloseForm.addEventListener("click",function(){
    overlayForm.style.display = "none";
});

btnCancelForm.addEventListener("click",function(){
    overlayForm.style.display = "none";
});
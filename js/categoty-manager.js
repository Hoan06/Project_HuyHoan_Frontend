const overlayForm = document.querySelector("#form-category");
const btnAddCategory = document.querySelector("#btn-add");
const iconCloseForm = document.querySelector("#icon-close");
const btnCancelForm = document.querySelector("#btn-cancel");
const categoryList = JSON.parse(localStorage.getItem("categoryList")) || [];

function renderCategory() {
    categoryList.forEach((item) => {
        
    });
}

btnAddCategory.addEventListener('click',function(){
    overlayForm.style.display = "flex";
});

iconCloseForm.addEventListener("click",function(){
    overlayForm.style.display = "none";
});

btnCancelForm.addEventListener("click",function(){
    overlayForm.style.display = "none";
});
const overlayForm = document.querySelector("#overlay");
const btnDeleteCategory = document.querySelectorAll("#btn-delete");
const iconCloseForm = document.querySelector("#icon-close");
const btnCancelForm = document.querySelector("#btn-cancel");
const btnAddTest = document.querySelector("#btn-add");

btnDeleteCategory.forEach(button => {
    button.addEventListener('click', function() {
        overlayForm.style.display = "flex";
    });
});

iconCloseForm.addEventListener("click",function(){
    overlayForm.style.display = "none";
});

btnCancelForm.addEventListener("click",function(){
    overlayForm.style.display = "none";
});

btnAddTest.addEventListener('click',function(){
    window.location.href = "../pages/add-fix-test.html";
});
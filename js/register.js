const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputPasswordCheck = document.querySelector("#input-password-check");
const btn = document.querySelector("#btn");
const errorName = document.querySelector("#error-name");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");
const errorPasswordCheck = document.querySelector("#error-password-check");
const emailList = JSON.parse(localStorage.getItem("email")) || [];

function clearError(input, errorElement) {
    input.addEventListener("input", function () {
        errorElement.textContent = "";
        input.style.border = "1px solid #ccc"; // Trả lại viền mặc định
    });
}

clearError(inputName, errorName);
clearError(inputEmail, errorEmail);
clearError(inputPassword, errorPassword);
clearError(inputPasswordCheck, errorPasswordCheck);

btn.addEventListener('click',function(){
    event.preventDefault();

    let flag = true;

    if (!inputName.value.trim()){
        errorName.textContent = "Tên không được để trống";
        inputName.style.border = "2px solid red";
        flag = false;
        return;
    } 
    if(!inputEmail.value.trim()){
        alert("Email không được để trống bạn iu ơi!");
        flag = false;
        return;
    }
    const check = emailList.some((user)=> user.email === inputEmail.value);
    if (check){
        alert("Email tồn tại rồi bạn iu ơi!");
        flag = false;
        return;
    }
    if (!inputPassword.value.trim()){
        alert("Mật khẩu không được để trống bạn iu ơi!");
        flag = false;
        return;
    }
    if (inputPassword.value.length < 8){
        alert("Mật khẩu tôí thiểu 8 ký tự bạn iu ơi!");
        flag = false;
        return;
    }
    if (inputPassword.value !== inputPasswordCheck.value){
        alert("Mật khẩu không trùng khớp rồi bạn iu !");
        flag = false;
        return;
    }
    emailList.push({
        email : inputEmail.value,
        password : inputPassword.value
    });
    localStorage.setItem("email",JSON.stringify(emailList));
    alert("Đăng ký thành công.");
    window.location.href = "../pages/login.html";
});

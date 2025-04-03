const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const btn = document.querySelector("#btn");
const emailList = JSON.parse(localStorage.getItem("email")) || [];

btn.addEventListener('click',function(){
    event.preventDefault();
    if (!inputEmail.value){
        alert("Email không được để trống !");
        return;
    }
    if (!inputPassword){
        alert("Mật khẩu không được để trống !");
        return;
    }
    const check = emailList.find((user)=> 
        user.email === inputEmail.value && user.password === inputPassword.value);
    if (check){
        alert("Đăng nhập thành công!");
        if (check.email === "admin@gmail.com"){
            window.location.replace("../pages/category-manager.html");
        } else {
            window.location.replace("../pages/dashboard.html");
        }
    } else {
        alert(`Đăng nhập thất bại !
Email hoặc mật khẩu không chính xác .`);
    }
});
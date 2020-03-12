
window.onload = pageLoad;
function pageLoad(){
    var clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var y = document.forms["myForm"]["password1"].value;
    
    var z = document.forms["myForm"]["password2"].value;
    
    if(y==z){
        
    }
    else if(y!=z){
        var password = document.getElementById("errormsg");
        password.innerHTML = "Password is not match";
        return false;
    }
}
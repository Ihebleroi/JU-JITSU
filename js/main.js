import { StaffData, DirigeanData, Admindata } from "./db.js";

// -------------------------------------------------- login ------------------------------------------------------//
let LoginEmail1 = document.getElementById("LoginEmail1");
let LoginPass1 = document.getElementById("LoginPass1");
const LoginBtn1 = document.getElementById("LoginBtn1");

function LoginStaff() {
    console.log(LoginEmail1.value);
    console.log(LoginPass1.value);
    console.log(StaffData);
    search(LoginEmail1.value, LoginPass1.value, StaffData);

    function search(LoginEmail1, LoginPass1, StaffData) {
        for (var i = 0; i <= StaffData.length; i++) {
            if (
                StaffData[i].email == LoginEmail1 &&
                StaffData[i].password == LoginPass1
            ) {
                window.location.href = "/staffPage.html";
            } else {
                alert("Email ou mot de passe incorrect");
            }
        }
    }
}
console.log(StaffData)

LoginBtn1.addEventListener("click", LoginStaff);
// ---------------------------------------------------------------------------------------

let LoginEmail2 = document.getElementById("LoginEmail2");
let LoginPass2 = document.getElementById("LoginPass2");
const LoginBtn2 = document.getElementById("LoginBtn2");


async function LoginDirigeant() {
    console.log(LoginEmail2.value);
    console.log(LoginPass2.value);
    console.log(DirigeanData);
    search(LoginEmail2.value, LoginPass2.value, DirigeanData);

    function search(LoginEmail2, LoginPass2, DirigeanData) {
        for (var i = 0; i <= DirigeanData.length; i++) {
            if (
                DirigeanData[i].email == LoginEmail2 &&
                DirigeanData[i].password == LoginPass2
            ) {
                window.location.href = "/dirigeantPage.html";
            } else {
                alert("Email ou mot de passe incorrect");
            }
        }
    }
}
console.log(DirigeanData)

LoginBtn2.addEventListener("click", LoginDirigeant);
// --------------------------------------------------End login ------------------------------------------------------//



let LoginEmail3 = document.getElementById("LoginEmail3");
let LoginPass3 = document.getElementById("LoginPass3");
const LoginBtn3 = document.getElementById("LoginBtn3");


async function loginAdmin() {
    console.log(LoginEmail3.value);
    console.log(LoginPass3.value);
    console.log(Admindata);
    search(LoginEmail3.value, LoginPass3.value, Admindata);

    function search(LoginEmail3, LoginPass3, Admindata) {
        for (var i = 0; i <= Admindata.length; i++) {
            if (
                Admindata[i].email == LoginEmail3 &&
                Admindata[i].password == LoginPass3
            ) {
                window.location.href = "/adminPage.html";
            } else {
                alert("Email ou mot de passe incorrect");
            }
        }
    }
}
console.log(Admindata)

LoginBtn3.addEventListener("click", loginAdmin);
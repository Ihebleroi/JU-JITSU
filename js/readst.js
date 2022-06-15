// --------------------------------------------------- read data -----------------------------------------------------//
import { StaffData } from "./db.js";

let stList = "";

for (let i = 0; i < StaffData.length; i++) {
    console.log(StaffData[i].id);
    stList =
        stList +
        `
    <div class="parent">
    <div class="child">
        <div class="childinner">${
          StaffData[i].name + " " + StaffData[i].lastName
        }</div>
    </div>
    <div class="child">
        <div class="childinner">${StaffData[i].email}</div>
    </div>
    <div class="child">
        <div class="childinner">${StaffData[i].Birthday}</div>
    </div>
        <div class="child">
        <div class="childinner">${StaffData[i].Sex}</div>
    </div>
        <div class="child">
        <div class="childinner">${StaffData[i].job}</div>
    </div>
        <button class="acceptbtn" id='acceptbtn'>
          <p>Accept</p>
        </button>
        <button class ="refusebtn" id="rfsbtn"><p>Refuse</p></button>
</div>
    `;
}

document.getElementById("myDIV").innerHTML = stList;
// --------------------------------------------------End read data ------------------------------------------------------//
export {
    stList
}
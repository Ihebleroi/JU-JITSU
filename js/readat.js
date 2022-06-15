import { AthletesData } from "./db.js";

let atlist = "";

for (let i = 0; i < AthletesData.length; i++) {
    console.log(AthletesData[i].id);
    atlist =
        atlist +
        `
    <div class="parent">
    <div class="child">
        <div class="childinner">${
            AthletesData[i].name + " " + AthletesData[i].lastName
        }</div>
    </div>
    <div class="child">
        <div class="childinner">${AthletesData[i].email}</div>
    </div>
    <div class="child">
        <div class="childinner">${AthletesData[i].Birthday}</div>
    </div>
        <div class="child">
        <div class="childinner">${AthletesData[i].Sex}</div>
    </div>
        <div class="child">
        <div class="childinner">${AthletesData[i].Grade}</div>
    </div>
        <button class="acceptbtn" id='acceptbtn'>
          <p>Accept</p>
        </button>
        <button class ="refusebtn" id="rfsbtn"><p>Refuse</p></button>
</div>
    `;
}

export {
    atlist
}
// --------------------------------------------------- read data -----------------------------------------------------//

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
    getFirestore,
    addDoc,
    getDocs,
    collection,
    query,
    where,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

console.log("Hello World !");
const firebaseConfig = {
    apiKey: "AIzaSyBRWLzRRprCQYoJLurxeu_laUjllfCHICw",
    authDomain: "ju-jitsu-524d6.firebaseapp.com",
    projectId: "ju-jitsu-524d6",
    storageBucket: "ju-jitsu-524d6.appspot.com",
    messagingSenderId: "484182057189",
    appId: "1:484182057189:web:631b5182a812ecd821740c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




import { DirigeanData } from "./db.js";

let drList = "";

for (let i = 0; i < DirigeanData.length; i++) {

    drList =
        drList +
        `
        <div class = "parent">
        <div class = "child">
        <div class = "childinner">${DirigeanData[i].name + ' ' + DirigeanData[i].lastName}</div></div>
        <div class = "child">
        <div class = "childinner">${DirigeanData[i].email}</div></div>
        <div class = "child">
        <div class = "childinner">${DirigeanData[i].Birthday}</div></div>
        <div class = "child">
        <div class = "childinner">${DirigeanData[i].Sex}</div></div>
        <div class = "child">
        <div class = "childinner">${DirigeanData[i].job}</div></div>
        <button class = "acceptbtn">
        <p>Accept</p></button>
        <button class ="refusebtn" id="rfsbtn"><p>Refuse</p></button></div>
    `;
}


console.log(drList);
document.getElementById("myDIV").innerHTML = drList;

export {
    drList
}
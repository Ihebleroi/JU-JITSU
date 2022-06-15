// Import the functions you need from the SDKs you need
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
// --------------------------------------------------Staff Collection------------------------------------------------------//
let Namebox1 = document.getElementById("NameBox1");
let lastNameBox1 = document.getElementById("LastNameBox1");
let BirthdayBox1 = document.getElementById("BirthdayBox1");
let Emailbox1 = document.getElementById("EmailBox1");
let SexBox1 = document.getElementById("SexBox1");
let Passbox1 = document.getElementById("PassBox1");
let radio1 = document.getElementsByName("job1");
var result1 = null;
let submitbtn1 = document.getElementById("submitBtn1");

async function AddStaff() {
    for (let i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            result1 = radio1[i].value;
        }
    }

    var ref = collection(db, "Staff");
    const docref = await addDoc(ref, {
            name: Namebox1.value,
            lastName: lastNameBox1.value,
            Birthday: BirthdayBox1.value,
            email: Emailbox1.value,
            Sex: SexBox1.value,
            password: Passbox1.value,
            job: result1,
        })
        .then(() => {
            alert("Ajouté avec succès");
        })
        .catch((Error) => {
            alert(Error);
        });
}

submitbtn1.addEventListener("click", AddStaff);
// --------------------------------------------------End Staff Collection------------------------------------------------------//

// --------------------------------------------------Dirigeant Collection------------------------------------------------------//

let Namebox2 = document.getElementById("NameBox2");
let lastNameBox2 = document.getElementById("LastNameBox2");
let BirthdayBox2 = document.getElementById("BirthdayBox2");
let Emailbox2 = document.getElementById("EmailBox2");
let SexBox2 = document.getElementById("SexBox2");
let Passbox2 = document.getElementById("PassBox2");
let radio2 = document.getElementsByName("job2");
var result2 = null;
let submitbtn2 = document.getElementById("submitBtn2");

async function AddDirigeant() {
    for (let i = 0; i < radio2.length; i++) {
        if (radio2[i].checked) {
            result2 = radio2[i].value;
        }
    }

    var ref = collection(db, "Dirigeant");
    const docref = await addDoc(ref, {
            name: Namebox2.value,
            lastName: lastNameBox2.value,
            Birthday: BirthdayBox2.value,
            email: Emailbox2.value,
            Sex: SexBox2.value,
            password: Passbox2.value,
            job: result2,
        })
        .then(() => {
            alert("Ajouté avec succès");
        })
        .catch((Error) => {
            alert(Error);
        });
}

submitbtn2.addEventListener("click", AddDirigeant);

// --------------------------------------------------End Dirigeant Collection------------------------------------------------------//

// --------------------------------------------------athletes Collection------------------------------------------------------//

let Namebox3 = document.getElementById("NameBox3");
let lastNameBox3 = document.getElementById("LastNameBox3");
let BirthdayBox3 = document.getElementById("BirthdayBox3");
var Grade = null;
let Emailbox3 = document.getElementById("EmailBox3");
let SexBox3 = document.getElementById("SexBox3");
let Passbox3 = document.getElementById("PassBox3");
let submitbtn3 = document.getElementById("submitBtn3");

async function AddAthletes() {
    const InscreptionBox3 = new Date(
        document.getElementById("InscreptionBox3").value
    );
    console.log(InscreptionBox3);
    const year = InscreptionBox3.getFullYear();
    console.log(year);
    var GradeYear = year - 7;
    console.log(GradeYear);
    if (GradeYear >= 2014 && GradeYear <= 2015) {
        Grade = "Ecole";
    } else if (GradeYear >= 2012 && GradeYear <= 2013) {
        Grade = "Poussins";
    } else if (GradeYear >= 2010 && GradeYear <= 2011) {
        Grade = "Minimes";
    } else if (GradeYear >= 2008 && GradeYear <= 2009) {
        Grade = "Cadets";
    } else if (GradeYear >= 2006 && GradeYear <= 2007) {
        Grade = "Juniors";
    } else if (GradeYear >= 2004 && GradeYear <= 2005) {
        Grade = "Seniors";
    } else if (GradeYear >= 2015) {
        Grade = "Noveau";
    } else if (GradeYear <= 2004) {
        Grade = "Seniors";
    }
    var ref = collection(db, "Athletes");
    const docref = await addDoc(ref, {
            name: Namebox3.value,
            lastName: lastNameBox3.value,
            Birthday: BirthdayBox3.value,
            Inscreption: InscreptionBox3,
            email: Emailbox3.value,
            Sex: SexBox3.value,
            password: Passbox3.value,
            Grade: Grade,
        })
        .then(() => {
            alert("Ajouté avec succès");
        })
        .catch((Error) => {
            alert(Error);
        });
}

submitbtn3.addEventListener("click", AddAthletes);

// -------------------------------------------------------------------------------------------------------//
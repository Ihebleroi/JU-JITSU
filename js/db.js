import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
    getFirestore,
    addDoc,
    getDocs,
    collection,
    query,
    where,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

console.log("Hello !");
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

////Staff data

let StaffData = [];

const stcolRef = collection(db, "Staff");

await getDocs(stcolRef)
    .then((e) => {
        e.docs.forEach((doc) => {
            StaffData.push({...doc.data(), id: doc.id });
        });
    })
    .catch((err) => {
        console.log(err.message);
    });

////Diregeant data
let DirigeanData = [];

const drcolRef = collection(db, "Dirigeant");

await getDocs(drcolRef)
    .then((e) => {
        e.docs.forEach((doc) => {
            DirigeanData.push({...doc.data(), id: doc.id });
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
////// athleytes data 
let AthletesData = [];

const atcolref = collection(db, "Athletes");

await getDocs(atcolref)
    .then((e) => {
        e.docs.forEach((doc) => {
            AthletesData.push({...doc.data(), id: doc.id });
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
////////////////////////////////


// Admin data

let Admindata = [];

const adcolRef = collection(db, "Admin");

await getDocs(adcolRef)
    .then((e) => {
        e.docs.forEach((doc) => {
            Admindata.push({...doc.data(), id: doc.id });
        });
    })
    .catch((err) => {
        console.log(err.message);
    });




//--------------------------- chart data ---------------------------------//

let boys = [];
let totalboys = 0;
let girls = [];
let totalgirls = 0;
let ecole = [];
let ecolenum = 0;
let Poussins = [];
let Poussinsnum = 0;
let Minimes = [];
let Minimesnum = 0;
let Cadets = [];
let Cadetsnum = 0;
let Juniors = [];
let Juniorsnum = 0;
let Seniors = [];
let Seniorsnum = 0;

async function ReadData() {
    // get boys
    const q = query(collection(db, "Athletes"), where("Sex", "==", "Homme"));
    getDocs(q).then((docsnap) => {
        docsnap.forEach((doc) => {
            boys.push(doc.data().name);
        });
        totalboys = boys.length;
    });
    // get girls
    const g = query(collection(db, "Athletes"), where("Sex", "==", "Femme"));
    getDocs(g).then((docsnap) => {
        docsnap.forEach((doc) => {
            girls.push(doc.data().name);
        });
        totalgirls = girls.length;
    });
    const e = query(collection(db, "Athletes"), where("Grade", "==", "Ecole"));
    getDocs(e).then((docsnap) => {
        docsnap.forEach((doc) => {
            ecole.push(doc.data().name);
        });

        ecolenum = ecole.length;
    });
    const p = query(collection(db, "Athletes"), where("Grade", "==", "Poussins"));
    getDocs(p).then((docsnap) => {
        docsnap.forEach((doc) => {
            Poussins.push(doc.data().name);
        });

        Poussinsnum = Poussins.length;
    });
    const m = query(collection(db, "Athletes"), where("Grade", "==", "Minimes"));
    getDocs(m).then((docsnap) => {
        docsnap.forEach((doc) => {
            Minimes.push(doc.data().name);
        });

        Minimesnum = Minimes.length;
    });
    const c = query(collection(db, "Athletes"), where("Grade", "==", "Cadets"));
    getDocs(c).then((docsnap) => {
        docsnap.forEach((doc) => {
            Cadets.push(doc.data().name);
        });

        Cadetsnum = Cadets.length;
    });
    const j = query(collection(db, "Athletes"), where("Grade", "==", "Juniors"));
    getDocs(j).then((docsnap) => {
        docsnap.forEach((doc) => {
            Juniors.push(doc.data().name);
        });

        Juniorsnum = Juniors.length;
    });
    const s = query(collection(db, "Athletes"), where("Grade", "==", "Seniors"));
    getDocs(s).then((docsnap) => {
        docsnap.forEach((doc) => {
            Seniors.push(doc.data().name);
        });

        Seniorsnum = Seniors.length;
    });
}

ReadData();

// -----------------------------end chart data----------------------//

export { StaffData, DirigeanData, AthletesData, Admindata, totalboys, totalgirls, ecolenum, Poussinsnum, Minimesnum, Cadetsnum, Juniorsnum, Seniorsnum };
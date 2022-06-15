import { Admindata, DirigeanData, StaffData } from "./db.js";
import { stList } from "./readst.js";
import { drList } from "./readdr.js";
import { atlist } from "./readat.js";

let ln = DirigeanData.length + StaffData.length;

let all = "";
all =
    all + drList + stList + atlist;



console.log(all);
document.getElementById("myDIV").innerHTML = all;
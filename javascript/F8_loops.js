// ============================================
// F8 - LOOPS
// Project: VoiceDoc AI - Doctor Voice Agent
// Run: node javascript/F8_loops.js
// 

const doctorProfile = {
    id: "DOC001",
    name: "Dr. Priya Sharma",
    specialization: "Cardiology",
    fee: 800,
    rating: 4.8,
    available: true
};

const patientQueue = [
    { name: "Ramesh Kumar",  age: 67, fee: 800,  isEmergency: true  },
    { name: "Suresh Sharma", age: 34, fee: 500,  isEmergency: false },
    { name: "Priya Patel",   age: 71, fee: 1200, isEmergency: true  },
    { name: "Mahesh Singh",  age: 28, fee: 600,  isEmergency: false },
    { name: "Kavita Mehta",  age: 55, fee: 800,  isEmergency: false }
];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 1 - for loop
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 1. for...of — Sab patients print karo
console.log("--- for...of ---");

for (const patient of patientQueue){
    console.log(`patientname:  , ${patient.name} , "fess :" , ${patient.fee}`)
}


// 2. for — Index ke saath

console.log("\n--- for loop ---");

for (let i =0 ; i<patientQueue.length ; i++){
    console.log(`${i+1} : ${patientQueue[i].name}`)
}

// 3. for...in — Doctor info print karo

// both above loops are applied on a list which element have a multiple objects 

// 3. for...in — Doctor info print karo

// this loop is applied for singal object keys and we want information of dpoctor profile 
console.log("\n--- for...in ---");

for  ( const  key in doctorProfile){
    console.log(`${key} : ${doctorProfile[key]}`)
}



// 4. while — Patients treat karo
console.log("\n--- while ---");

let patientleft =patientQueue.lenth;
while (patientleft>0){
    console.log(`patient remaining : ${patientleft}` )
    patientsLeft--;
}
console.log("Waiting room khaali!");

// 5. break — Pehla emergency dhundho
console.log("\n--- break ---");

for (const patient of patientQueue){
    if (patient.isEmergency){
        console.log(`emergency :${patient.name}`);
        break ;
    }
    console.log(`${patient.name} -normal `)
}


// 6. continue — Regular patients

console.log("\n--- continue ---");
for (const patient of patientQueue){
    if (patient.isEmergency) continue ;
        {
        console.log(`regularname  ${patient.name}`)
    }
    


}

// 7. Real Use — Report banao
let totalRevenue = 0;
let emergencyCount = 0;
let seniorCount = 0;

for (const patient of patientQueue) {
    totalRevenue += patient.fee;
    if (patient.isEmergency) emergencyCount++;
    if (patient.age >= 60) seniorCount++;
}

console.log(`
╔══════════════════════════════╗
║     VOICEDOC AI REPORT       ║
╠══════════════════════════════╣
║ Doctor        : ${doctorProfile.name}
║ Total Patients: ${patientQueue.length}
║ Emergency     : ${emergencyCount}
║ Senior (60+)  : ${seniorCount}
║ Total Revenue : ₹${totalRevenue}
╚══════════════════════════════╝
`);
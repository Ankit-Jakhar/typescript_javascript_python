// ============================================
// F9 - FUNCTIONS
// Project: VoiceDoc AI - Doctor Voice Agent
// Run: node javascript/F9_functions.js
// ============================================

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



// WHAT: Function define karo
// WHY:  Ek baar likho — baar baar use karo


function greetDoctor(name) {
//       ↑           ↑
//   Function naam   Parameter (input)

    return `Namaste, ${name}!`;
//  ↑
// Return = Function se value wapas bhejo
}

const greeting = greetDoctor(doctorProfile.name);
console.log(greeting);

// "Namaste, Dr. Priya Sharma!"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 2 - Parameters aur Return
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Parameter = Function ka input
//       Return    = Function ka output

// Parameter = Jo andar dete hain
// Return    = Jo bahar aata hai    

function calculateFees(basefee, hasdiscount)  {
    const gst =basefee*0.18 ;
    const discount = hasdiscount ? basefee*0.10 :0 ;
    const total = basefee + gst - discount ;
    return total ;
    //  ↑
// Yeh value wapas jaayegi caller ko!
//  basefee , hasdiscount (that is the perametre )
//  ↑
// Yeh value wapas jaayegi caller ko!
}
// call karo 

const fee1 = calculateFees(800 , false);
console.log(` fee with discount : ${fee1}`);

// 

const fee2 =calculateFees(800 , true);
console.log(`fee with discount : ${fee2}`);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 3 - Default Parameters
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Agar parameter na do → Default value use ho
// WHY:  Har baar parameter dena zaroori nahi!

function bookAppointment(patientName , time = "9:00 pm ")
//                                    ↑
//                             Default value!
//                             Agar na do → "9:00 AM" use hoga

{
    return `${patientName} ka appointmenmt  ${time}  pe hain `; 

}


console.log(bookAppointment("Ramesh Kumar"));
// "Ramesh Kumar ka appointment 9:00 AM pe hai"
// Time nahi diya → Default use hua!

console.log(bookAppointment("Suresh Sharma", "2:00 PM"));
// "Suresh Sharma ka appointment 2:00 PM pe hai"
// Time diya → Default override hua!


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Function without Return (void)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Kuch functions sirf kaam karte hain
//       Kuch return nahi karte
// WHY:  Console.log, alerts, notifications


function printPatientInfo(patient) {
    console.log(`
--- Patient Info ---
Name : ${patient.name}
Age  : ${patient.age}
Fee  : ₹${patient.fee}
Emergency: ${patient.isEmergency ? "YES 🔴" : "NO 🟢"}
    `);
    // Return nahi kiya → undefined return hota hai
}

printPatientInfo(patientQueue[0]);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 5 - Arrow Functions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Function likhne ka short tarika
// WHY:  Clean code — especially callbacks mein

// Normal function
function addGst(fee) {
    return fee * 1.18;
}

// Same kaam — Arrow function!
const addGstArrow = (fee) => fee * 1.18;
//                   ↑    ↑   ↑
//               Parameter => Return value
//                        ↑
//   

console.log(addGst(800));
console.log(addGstArrow(800));


// Multiple lines wala arrow function


const checkPatient =(patient) => {
    const isSenior =patient.age >= 60 ;
    const discount = isSenior ? patient.fee*0.10 :0 ;
    return {
        name : patient.name , 
        discount : discount , 
        finalFee : patient.fee - discount
    };
};

console.log(checkPatient(patientQueue[0]));
// { name: "Ramesh Kumar", discount: 80, finalFee: 720 }


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 6 - Function as Parameter
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Function ko doosre function mein dena
// WHY:  map(), filter() mein yahi hota hai!

 function processPatients(patients , processFn)
                //                      ↑
//                  Us function ko har element pe chalao
{
    return patients.map(processFn)
    //                      ↑
//                  Us function ko har element pe chalao


}


const getPatientSummary =(patient)=> `${patient.name}- ${patient.fee}`;

// Function ko parameter mein do!

const summarises = processPatients(patientQueue , getPatientSummary);
console.log(summarises)


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 7 - Scope
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Variable kahan accessible hai?
// WHY:  Galat jagah access kiya → ERROR!

const hospitalName = "Apollo Hospital";  // Global — sab access kar sak

function checkAvailabilty () {
    const roomNumber  =101;
    console.log(hospitalName);
    console.log(roomNumber);
}

checkAvailabilty();
// console.log(roomNumber);     


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 8 - Real Project Use
// ━

// Sab functions ek saath use karo!

function calculateTotalFee(fee , isSenior){
    const gst = fee*0.18;
    const discount =isSenior ? fee*0.10 :0 ;
    return fee  +gst - discount
}

function getPriority(patient) {
    if (patient.isEmergency) return "🔴 HIGH";
    if (patient.age >= 60) return "🟡 MEDIUM";
    return "🟢 NORMAL";
}

function generateReport(doctor, patients) {
    let totalRevenue = 0;
    let emergencyCount = 0;

    console.log(`\n=== ${doctor.name} — Patient Report ===\n`);

    for (const patient of patients) {
        const isSenior = patient.age >= 60;
        const finalFee = calculateTotalFee(patient.fee, isSenior);
        const priority = getPriority(patient);

        totalRevenue += finalFee;
        if (patient.isEmergency) emergencyCount++;

        console.log(`${priority} ${patient.name} — ₹${finalFee}`);
    }

    console.log(`
╔══════════════════════════════╗
║     VOICEDOC AI REPORT       ║
╠══════════════════════════════╣
║ Doctor       : ${doctor.name}
║ Total Patients: ${patients.length}
║ Emergency    : ${emergencyCount}
║ Total Revenue: ₹${totalRevenue.toFixed(2)}
╚══════════════════════════════╝
    `);
}

// Ek function call — sab kaam!
generateReport(doctorProfile, patientQueue);
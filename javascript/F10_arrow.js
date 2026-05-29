// Arrow Function = Function likhne ka
//                  CHOTA aur CLEAN tarika

// Jaise hospital mein:
// Normal way → Poora form bharo
// Arrow way  → Sirf signature karo — kaam ho gaya!

// Dono ka kaam same — bas tarika alag!

// Problem — Normal function bahut lamba tha:

// function addGst(fee) {
//     return fee * 1.18;
// }

// Solution — Arrow function:
// const addGst = (fee) => fee * 1.18;

// Ek line mein same kaam! ✅
// Aur map(), filter() ke saath
// bahut clean lagta hai!

// Normal Function se Arrow Function kaise banate hain:

// STEP 1 — Normal function:
// function addGst(fee) {
//     return fee * 1.18;
// }

// STEP 2 — "function" keyword hatao,
//           "=" aur "=>" add karo:
// const addGst = (fee) => {
//     return fee * 1.18;
// }

// STEP 3 — Ek line hai toh
//           {} aur return bhi hatao:
// const addGst = (fee) => fee * 1.18;

// STEP 4 — Ek parameter hai toh
//           () bhi hatao:
// const addGst = fee => fee * 1.18;


// Python Lambda:           JS Arrow Function:
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// lambda fee: fee * 1.18   fee => fee * 1.18

// Bilkul same concept!
// Bas syntax thoda alag!

// ============================================
// F10 - ARROW FUNCTIONS & LAMBDAS
// Project: VoiceDoc AI - Doctor Voice Agent
// Run: node javascript/F10_arrow.js
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


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 1 - Normal se Arrow tak
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// Normal function 

// ============================================
// F10 - ARROW FUNCTIONS & LAMBDAS
// Project: VoiceDoc AI - Doctor Voice Agent
// Run: node javascript/F10_arrow.js
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


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 1 - Normal se Arrow tak
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Normal function
function greetNormal(name) {
    return `Namaste Dr. ${name}!`;
}

// Arrow — Step by Step
// Step 1: const naam = (params) => { return value; }
const greetStep1 = (name) => { return `Namaste Dr. ${name}!`; };

// Step 2: Ek line → {} aur return hatao
const greetStep2 = (name) => `Namaste Dr. ${name}!`;

// Step 3: Ek parameter → () hatao
const greetFinal = name => `Namaste Dr. ${name}!`;

// Teeno same kaam karte hain!
console.log(greetNormal("Priya Sharma"));   // Namaste Dr. Priya Sharma!
console.log(greetStep1("Priya Sharma"));    // Namaste Dr. Priya Sharma!
console.log(greetStep2("Priya Sharma"));    // Namaste Dr. Priya Sharma!
console.log(greetFinal("Priya Sharma"));    // Namaste Dr. Priya Sharma!


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 2 - No Parameter
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Koi parameter nahi →
//       Empty () zaroori hai!

// Normal
function getHospitalName() {
    return "Apollo Hospital";
}

// Arrow — No parameter → () empty rakhna ZAROORI!
const getHospitalNameArrow = () => "Apollo Hospital";
//                            ↑
//                     Empty () — hata nahi sakte!

console.log(getHospitalName());       // Apollo Hospital
console.log(getHospitalNameArrow());  // Apollo Hospital


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 3 - Multiple Parameters
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: 2+ parameters → () zaroori!

// Normal
function calculateFee(fee, gstRate) {
    return fee + (fee * gstRate);
}

// Arrow — 2 parameters → () zaroori!
const calculateFeeArrow = (fee, gstRate) => fee + (fee * gstRate);
//                         ↑
//                    2 params → () nahi hata sakte!

console.log(calculateFee(800, 0.18));       // 944
console.log(calculateFeeArrow(800, 0.18));  // 944


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Multiline Arrow Function
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Multiple lines ka kaam →
//       {} aur return ZAROORI!

// Normal
function checkPatientNormal(patient) {
    const isSenior = patient.age >= 60;
    const discount = isSenior ? patient.fee * 0.10 : 0;
    const finalFee = patient.fee - discount;
    return { name: patient.name, finalFee, discount };
}

// Arrow — Multiple lines → {} aur return!
const checkPatientArrow = (patient) => {
//                          ↑
//                     1 param but () rakha
//                     Multiline mein () rakhna
//                     better practice hai!

    const isSenior = patient.age >= 60;
    const discount = isSenior ? patient.fee * 0.10 : 0;
    const finalFee = patient.fee - discount;
    return { name: patient.name, finalFee, discount };
//  ↑
// Multiline mein return likhna ZAROORI!
};

console.log(checkPatientNormal(patientQueue[0]));
// { name: "Ramesh Kumar", finalFee: 720, discount: 80 }

console.log(checkPatientArrow(patientQueue[0]));
// { name: "Ramesh Kumar", finalFee: 720, discount: 80 }


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 5 - Arrow + map/filter/find
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WHAT: Arrow functions map/filter ke saath
//       bahut clean lagte hain!
// WHY:  Yahi sabse zyada use hoga project mein!

// map() — Har patient ki fee GST ke saath
const feesWithGst = patientQueue.map(
    patient => patient.fee * 1.18
);
console.log("\nFees with GST:", feesWithGst);
// [944, 590, 1416, 708, 944]

// filter() — Sirf emergency patients
const emergencyPatients = patientQueue.filter(
    patient => patient.isEmergency
);
console.log("\nEmergency patients:");
emergencyPatients.forEach(p => console.log(p.name));
// Ramesh Kumar
// Priya Patel

// find() — Specific patient dhundho
const seniorPatient = patientQueue.find(
    patient => patient.age >= 60
);
console.log("\nFirst senior:", seniorPatient.name);
// Ramesh Kumar

// Chained — Filter + Map ek saath!
const emergencyFees = patientQueue
    .filter(patient => patient.isEmergency)
    .map(patient => ({
        name: patient.name,
        fee: patient.fee * 1.18
    }));
console.log("\nEmergency fees:", emergencyFees);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 6 - Rules Summary
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/*
RULE 1 — No params    → () zaroori
          () => value

RULE 2 — 1 param      → () optional
          param => value
          (param) => value  ← Better practice!

RULE 3 — 2+ params    → () zaroori
          (p1, p2) => value

RULE 4 — 1 line       → {} aur return nahi chahiye
          param => param * 1.18

RULE 5 — Multiple lines → {} aur return ZAROORI!
          (param) => {
              const x = ...;
              return x;
          }
*/


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 7 - Real Project Use
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Sab arrow functions — Doctor project!

const addGst = fee => fee * 1.18;
const getSeniorDiscount = fee => fee * 0.10;
const getPriority = patient => patient.isEmergency
    ? "🔴 HIGH"
    : patient.age >= 60
        ? "🟡 MEDIUM"
        : "🟢 NORMAL";

const generateBill = (patient) => {
    const isSenior = patient.age >= 60;
    const discount = isSenior ? getSeniorDiscount(patient.fee) : 0;
    const total = addGst(patient.fee - discount);
    return {
        name: patient.name,
        priority: getPriority(patient),
        baseFee: patient.fee,
        discount,
        total: total.toFixed(2)
    };
};

console.log("\n=== BILLS ===");
patientQueue
    .map(patient => generateBill(patient))
    .forEach(bill => {
        console.log(`
${bill.priority} ${bill.name}
Base: ₹${bill.baseFee} | Discount: ₹${bill.discount} | Total: ₹${bill.total}
        `);
    });


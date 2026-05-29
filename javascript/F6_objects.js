// =============================================
// F6 QUIZ — Objects / Dictionaries
// javascript/F6_objects.js
// =============================================

// Q1 — Patient object banao
// id, name, age, isEmergency: true
// address mein → city: "Delhi", ward: "General"

// Destructing ==> destructing meaning ye hain ki agar koi object aur uski keys ki valus ko mere ko varable mainn save akrani hain to its called destructing 
///object saves in heap memmorey not in stack memorey recorrd it 

//const doctor ={}; // empty object 

const doctor ={  name: "Dr. Priya Sharma",    // Keys quotes mein NAHI!
    id: "DOC001",                // JS mein keys bare simple hain
    specialization: "Cardiology",
    fee: 800,
    available: true,
    rating: 4.8
}

 console.log(doctor)
 console.log(typeof doctor );  // object   


 // js main qutoes main lagte kyuki keys autometically identifies ho jate hain 
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 2 - Object Access Karna
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// dot notation 

console.log("name:" , doctor.name)
console.log(doctor.id)
console.log(doctor.fee)
console.log(doctor.available)
console.log(doctor.rating)


// bracket notation 

console.log("specaillisation" ,doctor["specialization"])


// Bracket notation - variable se

const key ="rating";
console.log("raitng:" , doctor[key]);



// Property exist nahi - undefined aata hai
console.log("Phone:", doctor.phone);  // undefined - error nahi!

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 3 - Object Modify Karna
// ━ 

console.log("\n--- Modifying Object ---");

// update

doctor.fee =1000;

console.log("update fees:" , doctor.fee);


// Naya property add karo 

doctor.phone ="8990879879876"

console.log("object" , doctor )


// Delete karo 

delete doctor.phone 
console.log("dict"  , doctor )


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Destructuring
// ━ 

console.log("\n--- Destructuring ---");

const session = {
    doctorName: "Dr. Sharma",
    patientName: "Ramesh Kumar",
    fee: 800,
    duration: 30
};

const {doctorName , patientName , fee  , duration } =session ;

console.log("doctor" ,doctorName);
console.log("patientName" , patientName);
console.log("fee",fee);
console.log("duration" , duration);


// Rename karte hue destructure karo


const {doctorName : name , patientName: Pname, fee : fees , duration :Duration}= session;
console.log("rename:" , name ,Pname  , fees , Duration);

const { doctorName: dName, phone = "82498732 s" } = session;

console.log("rename:" , name ,Pname  , fees , Duration, phone) ;


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 5 - Nested Objects
// 



console.log("\n--- Nested Objects ---");

const FullDoctor ={
    name :"ashok",
    fee :"800",
    address : {
        city :"jaipur", 
        room :"1010",
        gali :"gorvdhan sku"
    }, 
    timing : {
        start :"9:00" ,
        end :"6:00"
    }
};

// Nested access - dot chain karo

console.log("object" , FullDoctor)

console.log(FullDoctor.address.city);
console.log(FullDoctor.timing.end);

// Nested destructuring

const {address : {city , room }} =FullDoctor;

console.log(city , room );


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 6 - Spread Operator==> spread operator are used for copy the object and merge the object 
// ━━━


console.log("\n--- Spread Operator ---");

const basicInfo = {
    name: "Dr. Sharma",
    id: "DOC001"
};  

const professionalInfo = {
    specialization: "Cardiology",
    fee: 800,
    rating: 4.8
};


// merge bith objects 


 const fullprofile ={
    ...basicInfo , ...professionalInfo
 }; 


console.log("merging two objects " , fullprofile); 



// Copy - naya object banao using the spread operatore 


const doctorcopy = {...basicInfo};

console.log("Original:", basicInfo.name);
doctorcopy.name ="dr, mehta"

console.log("updaded name in doctorcopy " , doctorcopy.name);  //Dr. sharma in doctor object are safe 


// Update - ek value change karke copy

const updatedDr = {...basicInfo , name : "Dr. rakekesh"};
console.log("updated doctor " , updatedDr , updatedDr.name ); 


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 7 - Object Methods
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 


const patient = {
    name: "Ramesh Kumar",
    age: 45,
    disease: "Hypertension",
    fee: 800
};

// find out keys 

console.log("keys " , Object.keys(patient)); 


// find out values 

console.log("values : " , Object.values(patient));


// Entries nikalo means add keys and values 
console.log("entries :" , Object.entries(patient));

// Entries se loop
console.log("\n--- Patient Report ---"); 

Object.entries(patient).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


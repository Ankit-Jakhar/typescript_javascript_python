# ============================================
# F9 - FUNCTIONS
# Project: VoiceDoc AI - Doctor Voice Agent
# Run: python python/F9_functions.py
# ============================================

doctor_profile = {
    "id": "DOC001",
    "name": "Dr. Priya Sharma",
    "specialization": "Cardiology",
    "fee": 800,
    "rating": 4.8,
    "available": True
}

patient_queue = [
    { "name": "Ramesh Kumar",  "age": 67, "fee": 800,  "is_emergency": True  },
    { "name": "Suresh Sharma", "age": 34, "fee": 500,  "is_emergency": False },
    { "name": "Priya Patel",   "age": 71, "fee": 1200, "is_emergency": True  },
    { "name": "Mahesh Singh",  "age": 28, "fee": 600,  "is_emergency": False },
    { "name": "Kavita Mehta",  "age": 55, "fee": 800,  "is_emergency": False }
]


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 1 - Basic Function
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def greet_doctor(name):
    return f"Namaste, {name}!"

print(greet_doctor(doctor_profile["name"]))


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 2 - Parameters aur Return
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def calculate_fee(base_fee, has_discount):
    gst = base_fee * 0.18
    discount = base_fee * 0.10 if has_discount else 0
    return base_fee + gst - discount

print(f"Fee: ₹{calculate_fee(800, False)}")  # ₹944
print(f"Fee: ₹{calculate_fee(800, True)}")   # ₹864


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 3 - Default Parameters
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def book_appointment(patient_name, time="9:00 AM"):
    return f"{patient_name} ka appointment {time} pe hai"

print(book_appointment("Ramesh Kumar"))
print(book_appointment("Suresh Sharma", "2:00 PM"))


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 4 - void Function (None return)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def print_patient_info(patient):
    print(f"""
--- Patient Info ---
Name     : {patient['name']}
Age      : {patient['age']}
Fee      : ₹{patient['fee']}
Emergency: {"YES 🔴" if patient['is_emergency'] else "NO 🟢"}
    """)

print_patient_info(patient_queue[0])


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 5 - Lambda (Arrow jaisa)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

add_gst = lambda fee: fee * 1.18
print(add_gst(800))  # 944.0


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 6 - Real Project Use
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def get_priority(patient):
    if patient["is_emergency"]:
        return "🔴 HIGH"
    if patient["age"] >= 60:
        return "🟡 MEDIUM"
    return "🟢 NORMAL"

def generate_report(doctor, patients):
    total_revenue = 0
    emergency_count = 0

    print(f"\n=== {doctor['name']} — Patient Report ===\n")

    for patient in patients:
        is_senior = patient["age"] >= 60
        final_fee = calculate_fee(patient["fee"], is_senior)
        priority = get_priority(patient)

        total_revenue += final_fee
        if patient["is_emergency"]:
            emergency_count += 1

        print(f"{priority} {patient['name']} — ₹{final_fee:.2f}")

    print(f"""
╔══════════════════════════════╗
║     VOICEDOC AI REPORT       ║
╠══════════════════════════════╣
║ Doctor        : {doctor['name']}
║ Total Patients: {len(patients)}
║ Emergency     : {emergency_count}
║ Total Revenue : ₹{total_revenue:.2f}
╚══════════════════════════════╝
    """)

generate_report(doctor_profile, patient_queue)
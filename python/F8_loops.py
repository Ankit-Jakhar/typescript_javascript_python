# ============================================
# F8 - LOOPS
# Project: VoiceDoc AI - Doctor Voice Agent
# Run: python python/F8_loops.py
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
# PART 1 - for loop (range)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("--- for loop ---")
for i in range(len(patient_queue)):
    patient = patient_queue[i]
    print(f"{i + 1}. {patient['name']} — Age: {patient['age']}")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 2 - for loop (direct — Python style)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("\n--- for...in (Python direct) ---")
for patient in patient_queue:
    print(f"Patient: {patient['name']} — Fee: ₹{patient['fee']}")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 3 - Dictionary loop
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("\n--- Dictionary loop ---")
for key, value in doctor_profile.items():
    print(f"{key}: {value}")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 4 - while loop
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("\n--- while loop ---")
patients_left = 5

while patients_left > 0:
    print(f"Patients remaining: {patients_left}")
    patients_left -= 1
print("Waiting room khaali!")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 5 - break aur continue
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("\n--- break ---")
for patient in patient_queue:
    if patient["is_emergency"]:
        print(f"🔴 Emergency: {patient['name']}")
        break

print("\n--- continue ---")
for patient in patient_queue:
    if patient["is_emergency"]:
        continue
    print(f"✅ Regular: {patient['name']}")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 6 - Real Project Use
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

total_revenue = 0
emergency_count = 0
senior_count = 0

for patient in patient_queue:
    total_revenue += patient["fee"]
    if patient["is_emergency"]:
        emergency_count += 1
    if patient["age"] >= 60:
        senior_count += 1

print(f"""
╔══════════════════════════════╗
║     VOICEDOC AI REPORT       ║
╠══════════════════════════════╣
║ Doctor        : {doctor_profile['name']}
║ Total Patients: {len(patient_queue)}
║ Emergency     : {emergency_count}
║ Senior (60+)  : {senior_count}
║ Total Revenue : ₹{total_revenue}
╚══════════════════════════════╝
""")



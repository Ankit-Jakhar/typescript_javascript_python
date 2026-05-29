# ============================================
# F6 - OBJECTS / DICTIONARIES
# Project: VoiceDoc AI - Doctor Voice Agent
# Run: python python/F6_objects.py
# ============================================


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 1 - Dictionary Banana
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
doctor_profile = {
    "id": "DOC001",
    "name": "Dr. Priya Sharma",
    "specialization": "Cardiology",
    "fee": 800,
    "rating": 4.8,
    "available": True,
    "address": {
        "hospital": "Apollo Hospital",
        "city": "Delhi",
        "room": 101
    }
}

print("\n--- Doctor Profile ---")
print(doctor_profile)

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 2 - Access Karna
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
print("\n--- Accessing Values ---")
# Bracket notation — Python ka tarika
print("Name:", doctor_profile["name"])
print("Fee:", doctor_profile["fee"])


# .get() — safe tarika
print("Phone:", doctor_profile.get("phone", "N/A"))  # N/A — error nahi!


# Nested access
print("Hospital:", doctor_profile["address"]["hospital"])
print("City:", doctor_profile["address"]["city"])


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 3 - Modify Karna
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("\n--- Modifying ---")

# Update
doctor_profile["fee"] = 1000
print("Updated Fee:", doctor_profile["fee"])

# Add
doctor_profile["phone"] = "9845012345"
print("Added Phone:", doctor_profile["phone"])

# Delete
del doctor_profile["phone"]
print("After Delete:", doctor_profile)

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 4 - Loop (Python mein Direct!)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("\n--- Loop ---")


session = {
    "doctor_name": "Dr. Priya Sharma",
    "patient_name": "Ramesh Kumar",
    "fee": 800,
    "duration": 30
}

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 5 - Spread Operator (Python mein **)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

print("\n--- Merge Dictionaries ---")

basic_info = {
    "name": "Dr. Sharma",
    "id": "DOC001"
}

professional_info = {
    "specialization": "Cardiology",
    "fee": 800
}

# Python mein ** spread operator hai
full_profile = {**basic_info, **professional_info}
print("Merged:", full_profile)


# Python mein ** spread operator hai
full_profile = {**basic_info, **professional_info}
print("Merged:", full_profile)

# Session shuru — doctor busy
active_session = {
    **doctor_profile,
    "available": False,          # Override
    "current_patient": "Ramesh Kumar",
    "session_start": "10:30 AM"
}
print("Available:", active_session["available"])  # False


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 6 - Real Project Use
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

doc_name = doctor_profile["name"]
specialization = doctor_profile["specialization"]
doc_fee = doctor_profile["fee"]

print(f"""
╔══════════════════════════════╗
║      VOICEDOC AI SESSION     ║
╠══════════════════════════════╣
║ Doctor : {doc_name}
║ Dept   : {specialization}
║ Fee    : ₹{doc_fee}
║ Patient: {active_session['current_patient']}
║ Time   : {active_session['session_start']}
║ Status : {"Free" if active_session['available'] else "In Session"}
╚══════════════════════════════╝
""")
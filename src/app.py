from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    resume = {
        "name": "Connor Sumpter Carmichael",
        "title": "Operational Leader, Army Medical Service Corps Officer, Data Scientist, & App Developer",
        "about": "Skilled operational leader with a knack for creating efficiencies. Quick to automate tasks and thrives on complex challenges.",
        "contact": {
            "email": "carmichaelpfi@gmail.com",
            "phone": "(907) 312-6672",
            "linkedin": "https://linkedin.com/in/ConnorCarm",
            "location": "Valparaiso, IN (Relocating to CO)"
        },
        "education": [
            "Master’s of Health Administration (2021)",
            "Bachelor’s of Healthcare Leadership (2020)",
            "Minor in Chemistry",
            "Minor in Biology",
            "Minor in Military Science",
            "Medical Information Management Course (2024)",
            "CompTIA Security+ Certification",
            "Basic Officer Leadership Course",
            "Project Management Professional (PMP) In-Progress"
        ],
        "awards": [
            "Meritorious Service Medal",
            "National Defense Service Medal",
            "Global War on Terrorism Expeditionary Medal",
            "Norweigan Foot March Badge",
            "German Armed Forces Proficiency Badge",
            "Dean’s List & Magna Cum Laude (MS)"
        ],
        "experience": [
            {
                "role": "Lead Consultant",
                "org": "Forvis Mazars",
                "dates": "2021 - Current",
                "bullets": [
                    "Identified and implemented over $75M in savings over the past 3 years - including continuous improvement initiatives in orthopedics, employee benefits, group purchasing organizations, and a variety of purchased services.",
                    "Independently designed and automated a custom Power BI dashboard using public data to benchmark and estimate total opportunity for large organizations. Reduced the amount of time needed for calculating KPIs and peer groups by 96% (5 min → 12 sec)."
                ]
            },
            {
                "role": "Aide-de-Camp",
                "org": "US Army",
                "dates": "2023 - Current",
                "bullets": [
                    "Serves as the senior Aide-de-Camp in the Army Reserve Medical Command. Provides executive support to Major General Michael Yost, Commanding General.",
                    "Provides operational support to the Headquarters, and missions across the United States in support of Army Reserve Medical current and future operations."
                ]
            },
            {
                "role": "Chief Information Officer",
                "org": "US Army (Deployment)",
                "dates": "2022",
                "bullets": [
                    "During an overseas deployment, served as the senior CIO (three grades above my rank) for two 32-bed hospitals and 10+ dispersed clinics.",
                    "Built and led a team of 7 to fully modernize health information systems across the area of operations, including degraded conditions in Syria and Iraq.",
                    "Also held additional duties such as Safety Officer and Security Officer. Frequently audited practices among the clinics."
                ]
            },
            {
                "role": "Movement Officer",
                "org": "US Army (Real-World Exercise)",
                "dates": "2020",
                "bullets": [
                    "Independently managed six chinook helicopters and their crews - personnel, flight logs, and manifests - to move medical teams and logistical requirements between rural locations in Kodiak, Alaska."
                ]
            }
        ],
        "hobbies": [
            "App Development (React Native)",
            "Skiing & Biking",
            "Travel",
            "Graphic Design",
            "Real Estate Investing"
        ],
        "quote": "”Connor thrives unsupervised, has an impressive work ethic, and his professionalism is well-suited for any team!”",
        "quote_author": "COL Dickie Vest, Brigade Commander"
    }
    return render_template('index.html', resume=resume)

if __name__ == '__main__':
    app.run(debug=True)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI app
app = FastAPI()

# Allow your frontend (localhost:3000) to access this backend (port 8000)
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Fake telemetry endpoint
@app.get("/telemetry")
def get_fake_telemetry():
    fake_data = {
        "driver": "VER",
        "data": [
            {"Time": 0.0, "Speed": 295, "Throttle": 100, "Brake": 0, "RPM": 12000, "DRS": True},
            {"Time": 0.1, "Speed": 296, "Throttle": 98, "Brake": 0, "RPM": 12150, "DRS": True},
            {"Time": 0.2, "Speed": 294, "Throttle": 70, "Brake": 1, "RPM": 11800, "DRS": False},
            {"Time": 0.3, "Speed": 280, "Throttle": 20, "Brake": 1, "RPM": 10500, "DRS": False},
            {"Time": 0.4, "Speed": 310, "Throttle": 100, "Brake": 0, "RPM": 12500, "DRS": True},
            {"Time": 0.5, "Speed": 315, "Throttle": 95, "Brake": 0, "RPM": 12600, "DRS": True},
            {"Time": 0.6, "Speed": 299, "Throttle": 60, "Brake": 1, "RPM": 11500, "DRS": False},
            {"Time": 0.7, "Speed": 285, "Throttle": 40, "Brake": 1, "RPM": 10800, "DRS": False},
            {"Time": 0.8, "Speed": 305, "Throttle": 85, "Brake": 0, "RPM": 12200, "DRS": True},
            {"Time": 0.9, "Speed": 312, "Throttle": 100, "Brake": 0, "RPM": 12700, "DRS": True},
        ],
    }
    return fake_data

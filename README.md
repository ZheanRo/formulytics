```bash
vehicle-performance-platform/
├── client/       # Next.js frontend
├── server/       # FastAPI backend
│   ├── .venv/
│   ├── main.py
│   └── requirements.txt
└── README.md

## Backend Setup
run in the terminal -> uvicorn main:app -- reload

This will start a server on http://127.0.0.1:8000 

## Frontend Setup
run in the terminal -> npm run dev
visit http:localhost:3000/dashboard

## End Points
/telemetry -> Returns telemetry JSON


## Reflection - Day 1
- Learned how  virtual environments isolate individual python packages and dependencies
- Fixed interpreter and path issues in VS Code (.venv not working)
- Set up FastAPI with a working '/telemetry' endpoint returning structured JSON.
- Created Next.js frontend and connected it  via fetch.
- Understood why CORS is required for frontend-backend communication.
- Next step: add visual telemetry charts using Recharts.

## Reflection - Day 2 
- Finalised dashboard layout
- Selected key metrics to visualise
    - Speed (km/h)
    - Throttle and brake (%)
    - Steering angle (°)
    - RPM and Gear Gauges
- Defined reusable component structure
- Installed recharts for charts
- Planned for simulated "live" playback mode using FastF1 data





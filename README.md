vehicle-performance-platform/
├── client/       # Next.js frontend
├── server/       # FastAPI backend
│   ├── .venv/
│   ├── main.py
│   └── requirements.txt
└── README.md

## Backend Setup
run in the terminal -> uvicorn main:app -- reload

This will start a server on http://localhost:8000 

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




## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

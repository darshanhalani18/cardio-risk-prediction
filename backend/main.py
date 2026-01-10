from fastapi import FastAPI
import joblib
import pandas as pd
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Cardio Risk Prediction API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("backend/models/cardio_rf_model.pkl")
scaler = joblib.load("backend/models/cardio_scaler.pkl")

@app.get("/")
def root():
    return {"message": "Cardio Risk API is running"}

class PatientData(BaseModel):
    age: int
    gender: int
    height: int
    weight: float
    high_bp: int
    low_bp: int
    smoke: int
    alco: int
    active: int
    cholesterol_level_2: int
    cholesterol_level_3: int
    glucose_level_2: int
    glucose_level_3: int
    
@app.post("/predict")
def predict(data: PatientData):

    bmi = data.weight / ((data.height / 100) ** 2)
    pulse_pressure = data.high_bp - data.low_bp

    input_df = pd.DataFrame([{
        "age": data.age,
        "gender": data.gender,
        "height": data.height,
        "weight": data.weight,
        "high_bp": data.high_bp,
        "low_bp": data.low_bp,
        "smoke": data.smoke,
        "alco": data.alco,
        "active": data.active,
        "BMI": bmi,
        "pulse_pressure": pulse_pressure,
        "cholesterol_level_2": data.cholesterol_level_2,
        "cholesterol_level_3": data.cholesterol_level_3,
        "glucose_level_2": data.glucose_level_2,
        "glucose_level_3": data.glucose_level_3
    }])

    input_scaled = scaler.transform(input_df)

    probability = model.predict_proba(input_scaled)[0][1]
    prediction = int(model.predict(input_scaled)[0])

    return {
        "prediction": prediction,
        "risk_percent": round(probability * 100, 2)
    }

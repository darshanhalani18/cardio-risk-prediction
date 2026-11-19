# 🫀 CardioRisk — Cardiovascular Risk Prediction System  

CardioRisk is a full-stack machine learning application designed to assess cardiovascular disease risk using clinical and lifestyle indicators.  
The project demonstrates how machine learning models can be integrated into a production-ready web system with a modern user interface and scalable backend.

🔗 **Live Application**: https://cardio-risk-prediction.vercel.app  
🔗 **Backend API**: https://cardio-risk-api.onrender.com  

---

## 🚀 Project Overview

CardioRisk was built as an end-to-end applied machine learning project, covering the complete lifecycle from data preprocessing and model training to deployment and user interaction.

The system allows users to enter health-related information and receive an instant cardiovascular risk assessment powered by a trained machine learning model.

This project emphasizes:
- Practical application of machine learning
- Clean system architecture
- Full-stack integration
- Production-ready deployment

> ⚠️ This application is intended strictly for educational and demonstration purposes and is **not a medical device**.

---

## 🧠 Machine Learning Approach

Multiple supervised learning models were trained and evaluated to ensure reliable predictions:

- Logistic Regression (baseline model)
- Decision Tree (interpretable model)
- Random Forest (ensemble model)

After comparative evaluation, the **Random Forest classifier** was selected for deployment due to its stronger generalization performance and robustness.

**Model Performance**  
- Best test accuracy: ~73%  
- Handles non-linear relationships and complex feature interactions effectively

---

## 🔄 How the System Works

1. Users provide basic health metrics and lifestyle information  
2. Derived features such as BMI and pulse pressure are calculated  
3. Inputs are standardized using the same preprocessing pipeline as training  
4. The trained Random Forest model performs inference  
5. Results are presented as a probability-based cardiovascular risk level

---

## 🏗️ System Architecture

```bash
cardio-risk-prediction/
│
├── backend/ # FastAPI backend and ML inference logic
├── frontend/ # Next.js web application
├── notebooks/ # Model training and experimentation
└── README.md # Project documentation
```

---
## ⚙️ Technology Stack

### Backend
- Python
- FastAPI
- Scikit-learn
- Pandas
- Joblib

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Deployment & Tools
- Frontend deployed on **Vercel**
- Backend deployed on **Render**
- Version control using **Git & GitHub**

---

## ⚠️ Medical Disclaimer

CardioRisk is a machine learning demonstration project and **does not provide medical advice, diagnosis, or treatment**.

Predictions are based on statistical patterns learned from historical data and may not be accurate for every individual.  
Users should always consult qualified healthcare professionals for medical decisions.

---

## 👨‍💻 About the Developer

**Darshan Halani**  
**Applied Machine Learning Practitioner**

I focus on applying machine learning to real-world problems through data-driven systems.  
This project showcases my ability to design complete ML pipelines - from feature engineering and model evaluation to API development and full-stack deployment.

---

## 📄 License

This project is developed for educational and learning purposes.  
You are free to explore and build upon it with proper attribution.

---

⭐ If you find this project valuable, feel free to star the repository.

The project follows a clean, modular structure with clear separation of concerns:


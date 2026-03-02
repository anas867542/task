# Mini Transaction Risk Monitoring System

## Project Overview

This is a **Mini Transaction Risk Monitoring System** built with **NestJS (backend), TypeORM, PostgreSQL**, and a **simple HTML + JavaScript frontend**.  
The system allows you to:

- Accept transactions via a form  
- Apply basic fraud rules  
- Flag risky or suspicious transactions  
- Display a simple dashboard with transaction statistics  

---

## Features

### Backend

- REST APIs
- Relational database (PostgreSQL)
- Fraud Rules:
  - **Rule 1:** Amount > 20,000 → `HIGH_RISK`
  - **Rule 2:** More than 3 transactions by the same user → `SUSPICIOUS`
- Transaction validations (prevent duplicates)
- Clean project structure
- Dashboard API to return stats

### Frontend

- Simple HTML + JavaScript interface
- Upload transactions via a form
- Transactions table highlighting flagged transactions
  - `HIGH_RISK` → red
  - `SUSPICIOUS` → orange
- Dashboard showing:
  - Total transactions
  - Flagged transactions
  - Count by rule

---

## Technology Stack

| Layer        | Technology |
| ------------ | ---------- |
| Backend      | NestJS, TypeORM |
| Database     | PostgreSQL |
| Frontend     | HTML, CSS, JavaScript |
| Validation   | class-validator (NestJS) |
| Server       | Node.js |

---

## Database Schema

**Table:** `transactions`

| Column           | Type       | Notes                                   |
| ---------------- | ---------- | -------------------------------------- |
| id               | int        | Primary key, auto increment             |
| transaction_id   | varchar    | Unique transaction identifier           |
| user_id          | varchar    | Indexed                                 |
| amount           | decimal    | Transaction amount                       |
| device_id        | varchar    | Device ID of user                        |
| timestamp        | timestamp  | Transaction date/time                    |
| risk_flag        | varchar    | NONE / HIGH_RISK / SUSPICIOUS           |
| rule_triggered   | varchar    | RULE_1 / RULE_2                          |
| created_at       | timestamp  | Auto-generated timestamp                 |

**Indexes:**  
- `transaction_id` → unique  
- `user_id` → indexed  
- `risk_flag` → indexed  

---

## Setup Instructions

### Backend

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure the database:**

- Create a PostgreSQL database.
- Update `.env` file with your credentials:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=transaction_risk
```

4. **Start the backend:**

```bash
npm run start:dev
```

Backend runs on **http://localhost:3000**
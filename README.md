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

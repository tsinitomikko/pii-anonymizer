# PII Anonymizer App



### A web application to detect and anonymize Personally Identifiable Information (PII) using a React frontend and a Node.js/Python backend.

---

## 📄 What It Does

This application provides a simple, secure way to process sensitive information, such as resumes or personal documents. It uses a **Presidio** backend to detect and replace PII entities like names, emails, phone numbers, and Australian-specific identifiers (e.g., TFN, ABN) with generic placeholders.

**Key Features:**
- **PII Detection**: Automatically scans text for various types of personal information.
- **Entity-Specific Anonymization**: Replaces each detected entity with a specific, descriptive placeholder (e.g., `<NAME>`, `<EMAIL>`).
- **Full-Stack Architecture**: Demonstrates a modern stack using React for the UI, Node.js for the API server, and Python for the PII processing logic.

---

## ⚙️ Technologies Used

* **Frontend**: React, CSS
* **Backend**: Node.js (Express), Python
* **PII Processing**: Presidio Analyzer and Anonymizer

---

## 🚀 Getting Started

To get this project up and running on your local machine, follow these steps.

### Prerequisites

You need to have the following installed:

* Node.js (LTS version recommended)
* Python 3.x
* npm (comes with Node.js)
* pip (comes with Python)

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/tsinitomikko/pii-anonymizer.git](https://github.com/tsinitomikko/pii-anonymizer.git)
    cd pii-anonymizer
    ```

2.  Install the Node.js dependencies for the frontend and backend:
    ```bash
    npm install
    ```

3.  Install the Python dependencies for the PII processing logic:
    ```bash
    pip install presidio-analyzer presidio-anonymizer
    ```

### Running the Application

1.  **Start the Backend API Server**:
    Open a new terminal window in the project root and run:
    ```bash
    node backend/server.js
    ```
    The server will start on `http://localhost:3001`. Keep this terminal running.

2.  **Start the Frontend**:
    Open a second terminal window in the project root and run:
    ```bash
    npm start
    ```
    The React application will open in your browser at `http://localhost:3000`.

---

## 💻 Usage

Once the application is running, you can paste any text into the input field and click "Anonymize Text". The frontend will send a request to your local backend, which will process the text and return the result.

### Example Input
```text
Contact Information:
Name: Jane Doe
Email: jane.doe@example.com
Phone: +61 412 345 678
Address: 456 Tech Street, Melbourne, VIC, Australia

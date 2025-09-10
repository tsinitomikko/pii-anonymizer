import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleValidation = async () => {
    setIsLoading(true);
    setError(null);
    setOutput(null);

    try {
      const response = await fetch('http://localhost:3001/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setOutput(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="header">
          <h2>Anonymize PII</h2>
        </div>
        
        <div className="note-container">
          <p>
            This application detects and anonymizes sensitive information. Enter text
            like a resume to see it in action.
          </p>
        </div>

        <div className="input-section">
          <textarea
            className="text-input"
            rows="10"
            placeholder="Enter text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>

        <button
          className="anonymize-button"
          onClick={handleValidation}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="spinner"></span>
          ) : (
            'Anonymize Text'
          )}
        </button>

        {isLoading && (
          <div className="status-note">
            <span className="loading-text">
              <span className="spinner"></span>
              API is loading...
            </span>
          </div>
        )}

        {error && (
          <div className="status-note error-note">
            <p>Error: {error}</p>
          </div>
        )}

        {output && (
          <div className="output-section">
            <div className="output-header">
              <h3>Result</h3>
              <p>PII Detected: {output.hasPii ? '✅ Yes' : '❌ No'}</p>
            </div>
            <textarea
              className="text-output"
              rows="10"
              readOnly
              value={output.processedText}
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
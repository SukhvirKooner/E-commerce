import React, { useState } from 'react';
import axios from 'axios';
import "./CSS/Custom.css"
const ChatGPTForm = () => {
  const [budget, setBudget] = useState('');
  const [useCase, setUseCase] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/custom', {
        budget,
        useCase,
      });

      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (





    <div className="container form-container custom">
      <h2 className='custom-title'>PC Component Suggestion Form</h2>
      <form className='form-inline' onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className='text'  htmlFor="budget">Budget:</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label className='text'  htmlFor="useCase">Use Case:</label>
          <input
            type="text"
            id="useCase"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="pricebtn btn btn-outline-dark btn-lg text" disabled={loading} style={{borderRadius:"0px"}}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {result && (
        <div className="result">
          <h3>Suggested Components:</h3>
          <p>{result}</p>
        </div> 
      )}
    </div>
  );
};

export default ChatGPTForm;

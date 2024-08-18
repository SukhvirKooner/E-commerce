import React, { useState } from 'react';
import axios from 'axios';
import "./Custom.css"
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

//     <div class="container form-container">
//     <form action="#" method="post" class="form-inline">
//         <div class="form-group mb-3">
//             <label for="budget" class="sr-only">Your Budget:</label>
//             <input type="text" id="budget" name="budget" class="form-control" placeholder="Enter your budget">
//         </div>

//         <div class="form-group mb-3">
//             <label for="usecase" class="sr-only">Your Use Case:</label>
//             <input type="text" id="usecase" name="usecase" class="form-control" placeholder="Enter your use case">
//         </div>

//         <button type="submit" class="btn btn-outline-dark">Submit</button>
//     </form>
// </div>



    <div className="container form-container custom">
      <h2>PC Component Suggestion Form</h2>
      <form className='form-inline' onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label  htmlFor="budget">Budget:</label>
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
          <label  htmlFor="useCase">Use Case:</label>
          <input
            type="text"
            id="useCase"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-outline-dark" disabled={loading} style={{borderRadius:"0px"}}>
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

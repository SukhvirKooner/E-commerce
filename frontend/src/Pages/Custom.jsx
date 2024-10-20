import React, { useState } from 'react';
import axios from 'axios';
import "./CSS/Custom.css"
function ChatGPTForm() {
  const [budget, setBudget] = useState('');
  const [usecase, setUseCase] = useState('');
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://cyberforge1.onrender.com/get-custom-pc', {
        budget,
        usecase
      });

      if (response.data.success) {
        setComponents(response.data.components);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching custom PC components:', error);
      setError('An error occurred while generating custom PC components. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="container form-container custom">
      <h1 className='custom-title'>Custom PC Generator</h1>
      <form className='form-inline' onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className='text' htmlFor="budget">Budget  $:</label>
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
          <label className='text' htmlFor="useCase">Use Case:</label>
          <input
            type="text"
            id="useCase"
            value={usecase}
            onChange={(e) => setUseCase(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="pricebtn btn btn-outline-dark btn-lg text" disabled={loading} style={{ borderRadius: "0px" }}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      </div>

      {loading && <p className='loading '>Loading...</p>}
      {error && <p>{error}</p>}
      {components.length > 0 && (
        <div className='subtext Result'>
          <h2 className='recomend'>Recommended Components:</h2>
          <ul>
            {components.map((component, index) => (
              <li key={index}>
                <strong>{component.name}</strong>: {component.specs}
              </li>
            ))}
          </ul>
        </div>
      )}
    
    </>
  );
}

export default ChatGPTForm;

import { useState } from 'react';
import Modal from 'react-modal';
import '../Petform.css'

Modal.setAppElement('#root');

function App() {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    age: '',
    description: '',
    healthStatus: '',
    photo: null,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://panasonic-pioneers-062.onrender.com/pets/add', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setModalIsOpen(true);
    } catch (error) {
      setErrorMessage('Failed to submit the form. Please try again.');
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>Pet Details Form</h1>
      <form onSubmit={handleSubmit} className="pet-form">
        <div className="form-group">
          <label>Pet Name</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
            <option value="rodent">Rodent</option>
          </select>
        </div>
        <div className="form-group">
          <label>Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Health Status</label>
          <input
            type="text"
            name="healthStatus"
            value={formData.healthStatus}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Success!</h2>
        <p>Your pet details have been submitted successfully.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;

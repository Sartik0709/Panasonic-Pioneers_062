import { useState } from 'react';
import Modal from 'react-modal';
import '../Petform.css';
import axios from 'axios';

Modal.setAppElement('#root');

function App() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    gender: '',
    description: '',
    healthStatus: '',
    ownerName: '',
    ownerContact: '',
    ownerCity: '',
    photos: [],
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: Array.from(files),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === 'photos') {
        formData.photos.forEach((photo, index) => {
          data.append('photos', photo);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('https://panasonic-pioneers-062.onrender.com/pets/add', data);
      console.log(response);
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
      <p>Pet Details Form</p>
      <form onSubmit={handleSubmit} className="pet-form">
        <div className="form-group">
          <label>Pet Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="dogs">Dog</option>
            <option value="cats">Cat</option>
            <option value="rabbits">Rabbit</option>
            <option value="rodents">Rodent</option>
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
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
          <label>Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Owner Contact</label>
          <input
            type="tel"
            name="ownerContact"
            value={formData.ownerContact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Owner City</label>
          <input
            type="text"
            name="ownerCity"
            value={formData.ownerCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Photos</label>
          <input
            type="file"
            name="photos"
            multiple
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

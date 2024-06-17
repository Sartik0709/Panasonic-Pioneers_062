import axios from 'axios';
import { useState } from 'react';

const ProviderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    services: 'pet_walking',
    price_hour: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://panasonic-pioneers-062.onrender.com/service/add', { provider: [formData] });
      console.log('Provider created:', response.data);
      // Optionally reset the form or show a success message
      setFormData({
        name: '',
        services: '',
        price_hour: '',
        description: ''
      });
    } catch (error) {
      console.error('There was an error creating the provider!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Add Service Provider</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="services" className="block text-gray-700">Service Type</label>
        <select
          id="services"
          name="services"
          value={formData.services}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="pet_medication">Pet Medication</option>
          <option value="pet_walking">Pet Walking</option>
          <option value="pet_sitting">Pet Sitting</option>
          <option value="pet_grooming">Pet Grooming</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="price_hour" className="block text-gray-700">Price per Hour</label>
        <input
          type="number"
          id="price_hour"
          name="price_hour"
          value={formData.price_hour}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ProviderForm;

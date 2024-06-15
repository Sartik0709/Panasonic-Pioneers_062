import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import './PetsList.css'; 

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    type: '',
    breed: '',
    ownerCity: '',
  });

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://panasonic-pioneers-062.onrender.com/pets/all');
        console.log("API Response:", response.data);
        setPets(response.data.pets);
        setFilteredPets(response.data.pets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const { type, breed, ownerCity } = searchParams;
    console.log("Search Params:", searchParams);
  
    const filtered = pets.filter((pet) => {
      return (
        (type ? (pet.type && pet.type.toLowerCase().includes(type.toLowerCase())) : true) &&
        (breed ? (pet.breed && pet.breed.toLowerCase().includes(breed.toLowerCase())) : true) &&
        (ownerCity ? (pet.ownerCity && pet.ownerCity.toLowerCase().includes(ownerCity.toLowerCase())) : true)
      );
    });
    console.log("Filtered Pets:", filtered);
    setFilteredPets(filtered);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`);
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleContactOwner = (ownerContact) => {
    window.location.href = `mailto:${ownerContact}`;
  };

  const handleFavorite = (petId) => {
    // Handle adding to favorites (e.g., save to local storage or send to backend)
    alert(`Pet with ID ${petId} added to favorites!`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="RPetsList-container">
      <div className="RContent">
        <aside className="RSidebar">
          <form onSubmit={handleSearch} className="RSearch-form">
            <h2>Search Pets</h2>
            <div className="RForm-group">
              <label htmlFor="RType">Type:</label>
              <input
                type="text"
                id="RType"
                name="type"
                value={searchParams.type}
                onChange={handleChange}
                placeholder="Enter pet type"
              />
            </div>
            <div className="RForm-group">
              <label htmlFor="RBreed">Breed:</label>
              <input
                type="text"
                id="RBreed"
                name="breed"
                value={searchParams.breed}
                onChange={handleChange}
                placeholder="Enter pet breed"
              />
            </div>
            <div className="RForm-group">
              <label htmlFor="ROwnerCity">Owner City:</label>
              <input
                type="text"
                id="ROwnerCity"
                name="ownerCity"
                value={searchParams.ownerCity}
                onChange={handleChange}
                placeholder="Enter owner city"
              />
            </div>
            <button type="submit" className="RSearch-button">Search</button>
          </form>
        </aside>
        <main className="RMain-content">
          <div className="RPets-grid">
            {filteredPets.map((pet) => (
              <div key={pet._id} className="RPet-card">
                <img src={`https://panasonic-pioneers-062.onrender.com${pet.photos[0]}`} alt={pet.name} className="RPet-image" />
                {console.log(`https://panasonic-pioneers-062.onrender.com/${pet.photos[0]}`)}
                <div className="RPet-details">
                  <h3 className="RPet-name">{pet.name}</h3>
                  <div className="RPet-info">
                    <div><span className="RKey">Type:</span> {pet.type}</div>
                    <div><span className="RKey">Breed:</span> {pet.breed}</div>
                    <div><span className="RKey">Owner City:</span> {pet.ownerCity}</div>
                    <div><span className="RKey">Age:</span> {pet.age}</div>
                    <div><span className="RKey">Gender:</span> {pet.gender}</div>
                    <div><span className="RKey">Health Status:</span> {pet.healthStatus}</div>
                    <div><span className="RKey">Owner Name:</span> {pet.ownerName}</div>
                    <div><span className="RKey">Owner Contact:</span> {pet.ownerContact}</div>
                    <div><span className="RKey">Description:</span> {pet.description}</div>
                  </div>
                  <button
                    className="RContact-button"
                    onClick={() => handleContactOwner(pet.ownerContact)}
                  >
                    Contact Owner
                  </button>
                  <button
                    className="RFavorite-button"
                    onClick={() => handleFavorite(pet._id)}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PetsList;

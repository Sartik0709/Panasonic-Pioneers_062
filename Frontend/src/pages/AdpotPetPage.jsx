import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './PetsList.css'; // Custom CSS file
// import { Card, Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';


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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate(); // Initialize useNavigate
  const {users}=useSelector(state => state.loginData);

  // console.log("mydata",users)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://panasonic-pioneers-062.onrender.com/pets/all', {
          params: { page, limit: 6 }
        });
        setPets(response.data.pets);
        setFilteredPets(response.data.pets);
        setTotalPages(response.data.pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    const { type, breed, ownerCity } = searchParams;

    const filtered = pets.filter((pet) => {
      return (
        (type ? (pet.type && pet.type.toLowerCase().includes(type.toLowerCase())) : true) &&
        (breed ? (pet.breed && pet.breed.toLowerCase().includes(breed.toLowerCase())) : true) &&
        (ownerCity ? (pet.ownerCity && pet.ownerCity.toLowerCase().includes(ownerCity.toLowerCase())) : true)
      );
    });
    setFilteredPets(filtered);
  };

  const handleContactOwner = (ownerContact) => {
    window.location.href = `mailto:${ownerContact}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(`Changing ${name} to ${value}`);
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handlePetSelect = (id) => {
    // console.log("trigger petSelected:", `/payment/${id}`);
    localStorage.setItem('petId', JSON.stringify(id));
    navigate(`/payment/${id}`);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };


  if (error) return <p>Error: {error}</p>;
  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </div>
    );
  }

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
                <img src={`https://panasonic-pioneers-062.onrender.com/${pet.photos[0]}`} alt={pet.name} className="RPet-image" />
                <div className="RPet-details">
                  <h3 className="RPet-name">{pet.name}</h3>
                  <div className="RPet-info">
                    <div><span className="RKey">Breed:</span> {pet.breed}</div>
                    <div><span className="RKey">Age:</span> {pet.age}</div>
                    <div><span className="RKey">Gender:</span> {pet.gender}</div>
                    <div><span className="RKey">Health Status:</span> {pet.healthStatus}</div>
                    <div><span className="RKey">Owner Name:</span> {pet.ownerName}</div>
                    <div><span className="RKey">Owner Contact:</span> {pet.ownerContact}</div>
                  </div>
                  <button
                    className="RContact-button"
                    onClick={() => handleContactOwner(pet.ownerContact)}
                  >
                    Contact Owner
                  </button>
                  <button
                    className="RFavorite-button"
                    onClick={() => handlePetSelect(pet._id)} // Handle adoption click
                  >
                    Adopt pet
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="RPagination">
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num + 1}
                onClick={() => handlePageChange(num + 1)}
                className={page === num + 1 ? 'RActive' : ''}
              >
                {num + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PetsList;

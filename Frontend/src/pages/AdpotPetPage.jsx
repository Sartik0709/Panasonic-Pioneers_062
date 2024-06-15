import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import './PetsList.css'; 

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://panasonic-pioneers-062.onrender.com/pets/all');
        setPets(response.data.pets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container className="pets-list-container">
      {pets.map((pet) => (
        <Card key={pet._id} className="pet-card">
          <Card.Img variant="top" src={pet.photos[0]} />
          <Card.Body>
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text>
              <strong>Type:</strong> {pet.type} <br />
              <strong>Breed:</strong> {pet.breed} <br />
              <strong>Age:</strong> {pet.age} <br />
              <strong>Gender:</strong> {pet.gender} <br />
              <strong>Health Status:</strong> {pet.healthStatus} <br />
              <strong>Owner Name:</strong> {pet.ownerName} <br />
              <strong>Owner Contact:</strong> {pet.ownerContact} <br />
              <strong>Owner City:</strong> {pet.ownerCity} <br />
              <strong>Description:</strong> {pet.description} <br />
            </Card.Text>
            <Button variant="primary" className="contact-button">Contact Owner</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default PetsList;

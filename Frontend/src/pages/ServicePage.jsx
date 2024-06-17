import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import './ServiceList.css';
import { useNavigate } from 'react-router';
import PetpalVideo from '../components/PetpalVideo';

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleBookService = (serviceId) => {
    // console.log('Booked service with ID:', serviceId);
    localStorage.setItem('BookId', JSON.stringify(serviceId));
      Navigate('/servicePaymentPage')
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://panasonic-pioneers-062.onrender.com/service/all');
        // console.log("response: ", response.data.provider);
        setServices(response.data.provider);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
   
      <div className="intro-section">
        <Container >
          <h1>Welcome to Pet Services</h1>
          <br />
          <p>Find the best services for your beloved pets, from walking and sitting to grooming and medication. Book your preferred service today!</p>
          <br />
          <Button variant="primary" style={{ color: 'white', backgroundColor: '#f1b505', marginTop:"10px", padding:"10px", borderRadius:"10px" }}>Book Session</Button>
        </Container>
      </div>
       <h1 className="intro-heading">Exceptional Pet Care Services</h1>
      <Container className="service-list-container">
        {services.map((service) => (
          <Card key={service._id} className="service-card">
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>Services: {service.services}</Card.Text>
              <Card.Text>Price per hour:<b> ${service.price_hour}</b></Card.Text>
              <Card.Text>{service.description}</Card.Text>
              <Card.Text>Rating: {service.rating}</Card.Text>
              <Button onClick={() => handleBookService(service._id)} variant="primary" className="contact-button">Book Service</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ServicePage;

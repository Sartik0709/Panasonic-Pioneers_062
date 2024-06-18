import { useState, useEffect } from 'react';
import { Container, Card, Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import { FaPhone, FaWhatsapp } from 'react-icons/fa'; 
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import './ServicePayment.css'; 
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const ServicePayment = () => {
  const [service, setService] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card'); 
  const [cardNumber, setCardNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bookDateTime, setBookDateTime] = useState(new Date()); 
  const [totalCharge, setTotalCharge] = useState(0);
  const navigate = useNavigate();

  const { users } = useSelector(state => state.loginData);  //token and userName
  

  useEffect(() => {
    const fetchServices = async () => {
      const serviceId = JSON.parse(localStorage.getItem('BookId'));
      try {
        const response = await axios.get(`https://panasonic-pioneers-062.onrender.com/service/${serviceId}`);
        setService(response.data.provider);
        setTotalCharge(response.data.provider.price_hour); // Initialize total charge with price per hour
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchServices();
  }, []);

  const handlePayment = async () => {
    const bookingData = {
      serviceId: service._id,
      userId: users.userName,
      bookedDateTime: bookDateTime,
      cardNumber: paymentMethod === 'card' ? cardNumber : null,
      upiId: paymentMethod === 'upi' ? upiId : null,
      paymentMethod: paymentMethod,
      totalCharge: totalCharge
    };

    try {
      const response = await axios.post('https://panasonic-pioneers-062.onrender.com/booking/add', bookingData,
        { headers: { Authorization: `Bearer ${users.token}` } }
      );

      console.log('Booking created successfully: not null', response.data.booking);
      alert(`Hello ${users.userName} Payment Successfully Completed by Email :${users.email}`);

      // Redirect to services or confirmation page
      navigate('/services');
    } catch (err) {
      console.error('Error creating booking:', err.message);
    }
  };

  const handleBookDateTimeChange = (date) => {
    setBookDateTime(date);
    const hoursBooked = 1;
    setTotalCharge(service.price_hour * hoursBooked);
  };

  if (!service) return <p>Loading...</p>;

  return (
    <Container className="service-payment-container">
      <div className="payment-process">
        <h1>Payment Process</h1>
        <Form>
          <FormGroup className="form-group">
            <FormLabel className="form-label">Select Payment Method:</FormLabel>
            <FormControl as="select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="card">Credit Card</option>
              <option value="upi">UPI ID</option>
            </FormControl>
          </FormGroup>

          {paymentMethod === 'card' && (
            <FormGroup className="form-group">
              <FormLabel className="form-label">Enter Card Number:</FormLabel>
              <FormControl placeholder='Ex: 0000 0000 0000 0000' type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </FormGroup>
          )}

          {paymentMethod === 'upi' && (
            <FormGroup className="form-group">
              <FormLabel  className="form-label">Enter UPI ID:</FormLabel>
              <FormControl placeholder="Ex: 9921857946@ybl" type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
            </FormGroup>
          )}

          <FormGroup className="form-group">
            <FormLabel className="form-label">Select Book Date and Time:</FormLabel>
            <DatePicker
              selected={bookDateTime}
              onChange={handleBookDateTimeChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              dateFormat="MMMM d, yyyy HH:mm"
              className="form-control"
            />
          </FormGroup>

          <FormGroup className="form-group">
            <FormLabel className="form-label">Total Charge:</FormLabel>
            <FormControl type="text" value={`$${totalCharge}`} readOnly />
          </FormGroup>

          <Button onClick={handlePayment} variant="primary" className="payment-button">Proceed to Payment</Button>
        </Form>
      </div>

      <Card className="service-info">
        <Card.Body>
          <Card.Title className="card-title">Service Provider</Card.Title>
          <Card.Text className="card-text">Provider: {service.name}</Card.Text>
          <Card.Text className="card-text">Service: {service.services}</Card.Text>
          <Card.Text className="card-text">Total Charges: <b>${service.price_hour}</b></Card.Text>
          <Card.Text className="card-text">Description: {service.description}</Card.Text>
          <Card.Text className="card-text">Rating: {service.rating}</Card.Text>
          <div className="contact-icons"> Contact Provider: 
          {/* href={`tel:${service.phone}`}  */}
            <a className="contact-icon">
              <FaPhone size={20} />
            </a>
            {/* href={`https://wa.me/${service.whatsapp}`}  */}
            <a className="contact-icon" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServicePayment;

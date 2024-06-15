import { useState, useEffect } from 'react';
import { Container, Card, Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import './ServicePayment.css'; 
import { useNavigate } from 'react-router';

const ServicePayment = () => {
  const [service, setService] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card'); 
  const [cardNumber, setCardNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bookDateTime, setBookDateTime] = useState(new Date()); 
  const [totalCharge, setTotalCharge] = useState(0);
  const navigate = useNavigate();

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

  const handlePayment = () => {
    if (paymentMethod === 'card') {
      // Implement payment processing for card
      console.log('Processing card payment for service:', service._id);
      console.log('Card Number:', cardNumber);
      alert("Payment Successfully Completed")
      navigate('/services')
    } else if (paymentMethod === 'upi') {
      // Implement payment processing for UPI ID
      console.log('Processing UPI payment for service:', service._id);
      console.log('UPI ID:', upiId);
    }
    // You would typically integrate with a payment gateway or service here
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
          <FormGroup>
            <FormLabel>Select Payment Method:</FormLabel>
            <FormControl as="select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="card">Credit Card</option>
              <option value="upi">UPI ID</option>
            </FormControl>
          </FormGroup>

          {paymentMethod === 'card' && (
            <FormGroup>
              <FormLabel>Enter Card Number:</FormLabel>
              <FormControl type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </FormGroup>
          )}

          {paymentMethod === 'upi' && (
            <FormGroup>
              <FormLabel>Enter UPI ID:</FormLabel>
              <FormControl type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
            </FormGroup>
          )}

          <FormGroup>
            <FormLabel>Select Book Date and Time:</FormLabel>
            <DatePicker
              selected={bookDateTime}
              onChange={handleBookDateTimeChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={55}
              dateFormat="MMMM d, yyyy HH:mm"
              className="form-control"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Total Charge:</FormLabel>
            <FormControl type="text" value={`$${totalCharge}`} readOnly />
          </FormGroup>

          <Button onClick={handlePayment} variant="primary" className="payment-button">Proceed to Payment</Button>
        </Form>
      </div>

      <Card className="service-info">
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>Services: {service.services}</Card.Text>
          <Card.Text>Price per hour: <b>${service.price_hour}</b></Card.Text>
          <Card.Text>{service.description}</Card.Text>
          <Card.Text>Rating: {service.rating}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServicePayment;



// import  { useEffect, useState } from 'react';
// // import { useLocation } from 'react-router-dom';
// import { Container, Card, Button } from 'react-bootstrap';
// import axios from 'axios';

// const ServicePayment = () => {

//   const [service, setService] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//         const serviceId = JSON.parse(localStorage.getItem('BookId'));
//         console.log(serviceId);
//       try {
//         const response = await axios.get(`https://panasonic-pioneers-062.onrender.com/service/${serviceId}`);
//         setService(response.data.provider);
//       } catch (err) {
//         console.log(err.message);
//         // setError(err.message);
//       } 
//     };

//     fetchServices();
//   }, []);

//   if (!service) return <p>Loading...</p>;

//   const handlePayment = () => {
//     console.log('Processing payment for service:', service._id);
//   };

//   return (
//     <Container>
//       <h1>Service Payment</h1>
//       <Card className="service-card">
//         <Card.Body>
//           <Card.Title>{service.name}</Card.Title>
//           <Card.Text>Services: {service.services}</Card.Text>
//           <Card.Text>Price per hour: <b>${service.price_hour}</b></Card.Text>
//           <Card.Text>{service.description}</Card.Text>
//           <Card.Text>Rating: {service.rating}</Card.Text>
//           <Button onClick={handlePayment} variant="primary">Proceed to Payment</Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default ServicePayment;


// import { useState, useEffect } from 'react';
// import { Container, Card, Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
// import axios from 'axios';
// import './ServicePayment.css'; // Import your CSS file for additional styling

// const ServicePayment = () => {
//   const [service, setService] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method
//   const [cardNumber, setCardNumber] = useState('');
//   const [upiId, setUpiId] = useState('');

//   useEffect(() => {
//     const fetchServices = async () => {
//       const serviceId = JSON.parse(localStorage.getItem('BookId'));
//       try {
//         const response = await axios.get(`https://panasonic-pioneers-062.onrender.com/service/${serviceId}`);
//         setService(response.data.provider);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchServices();
//   }, []);

//   const handlePayment = () => {
//     if (paymentMethod === 'card') {
//       // Implement payment processing for card
//       console.log('Processing card payment for service:', service._id);
//       console.log('Card Number:', cardNumber);
//     } else if (paymentMethod === 'upi') {
//       // Implement payment processing for UPI ID
//       console.log('Processing UPI payment for service:', service._id);
//       console.log('UPI ID:', upiId);
//     }
//     // You would typically integrate with a payment gateway or service here
//   };

//   if (!service) return <p>Loading...</p>;

//   return (
//     <Container className="service-payment-container">
//       <div className="payment-process">
//         <h1>Payment Process</h1>
//         <Form>
//           <FormGroup>
//             <FormLabel>Select Payment Method:</FormLabel>
//             <FormControl as="select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//               <option value="card">Credit Card</option>
//               <option value="upi">UPI ID</option>
//             </FormControl>
//           </FormGroup>

//           {paymentMethod === 'card' && (
//             <FormGroup>
//               <FormLabel>Enter Card Number:</FormLabel>
//               <FormControl type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
//             </FormGroup>
//           )}

//           {paymentMethod === 'upi' && (
//             <FormGroup>
//               <FormLabel>Enter UPI ID:</FormLabel>
//               <FormControl type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
//             </FormGroup>
//           )}

//           <Button onClick={handlePayment} variant="primary" className="payment-button">Proceed to Payment</Button>
//         </Form>
//       </div>

//       <Card className="service-info">
//         <Card.Body>
//           <Card.Title>{service.name}</Card.Title>
//           <Card.Text>Services: {service.services}</Card.Text>
//           <Card.Text>Price per hour: <b>${service.price_hour}</b></Card.Text>
//           <Card.Text>{service.description}</Card.Text>
//           <Card.Text>Rating: {service.rating}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default ServicePayment;


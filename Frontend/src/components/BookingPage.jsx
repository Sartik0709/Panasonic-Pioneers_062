import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './BookingPage.css';

// const stripePromise = loadStripe('your-publishable-key-here');

// const services = [
//   {
//     id: 1,
//     name: 'Dog Walking',
//     provider: 'John Doe',
//     rating: 4.5,
//     reviews: 12,
//   },
//   {
//     id: 2,
//     name: 'Pet Sitting',
//     provider: 'Jane Smith',
//     rating: 4.8,
//     reviews: 20,
//   },
//   {
//     id: 3,
//     name: 'Grooming',
//     provider: 'Emily Davis',
//     rating: 4.7,
//     reviews: 15,
//   },
//   {
//     id: 4,
//     name: 'Veterinary Services',
//     provider: 'Dr. Alice Brown',
//     rating: 4.9,
//     reviews: 22,
//   },
//   {
//     id: 5,
//     name: 'Pet Training',
//     provider: 'Mark Wilson',
//     rating: 4.6,
//     reviews: 18,
//   },
// ];

const BookingPage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  useEffect(() => {
    const foundService = services.find((s) => s.id === parseInt(serviceId));
    setService(foundService);
  }, [serviceId]);

  const handleBookService = () => {
    if (bookingDate && bookingTime) {
      setShowPaymentForm(true);
    } else {
      alert('Please select a date and time.');
    }
  };

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-page">
      <div className="left-column">
        <h2>{service.name}</h2>
        <p>Provider: {service.provider}</p>
        <p>Rating: {service.rating} ({service.reviews} reviews)</p>
      </div>
      <div className="right-column">
        <div className="booking-form">
          <h2>Book {service.name}</h2>
          <label>
            Select Date:
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </label>
          <label>
            Select Time:
            <input
              type="time"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
            />
          </label>
          <button onClick={handleBookService}>Confirm Booking</button>
        </div>
        {showPaymentForm && (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              selectedService={service}
              bookingDate={bookingDate}
              bookingTime={bookingTime}
              setShowPaymentForm={setShowPaymentForm}
            />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default BookingPage;

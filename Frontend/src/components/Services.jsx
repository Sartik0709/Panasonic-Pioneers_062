import  { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './ServicePage.css';   
  
const stripePromise = loadStripe('your-publishable-key-here');

// Sample data for services
const services = [
  {
    id: 1,
    name: 'Dog Walking',
    provider: 'John Doe',
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 2,
    name: 'Pet Sitting',
    provider: 'Jane Smith',
    rating: 4.8,
    reviews: 20,
  },
  {
    id: 3,
    name: 'Grooming',
    provider: 'Emily Davis',
    rating: 4.7,
    reviews: 15,
  },
];

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookings, setBookings] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleBookService = () => {
    if (selectedService && bookingDate && bookingTime) {
      setShowPaymentForm(true);
    } else {
      alert('Please select a service and date/time.');
    }
  };

  return (
    <div className="service-page">
      <h1>Pet Care Services</h1>
      <br />
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>Provider: {service.provider}</p>
            <p>Rating: {service.rating} ({service.reviews} reviews)</p>
            <button onClick={() => setSelectedService(service)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="booking-form">
          <h2>Book {selectedService.name}</h2>
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
      )}

      {showPaymentForm && (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            selectedService={selectedService}
            bookingDate={bookingDate}
            bookingTime={bookingTime}
            setBookings={setBookings}
            setShowPaymentForm={setShowPaymentForm}
          />
        </Elements>
      )}

      <div className="booking-list">
        <h2>Upcoming Bookings</h2>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <p>
                Service: {booking.service.name} <br />
                Date: {booking.date} <br />
                Time: {booking.time}
              </p>
            </div>
          ))
        ) : (
          <p>No upcoming bookings.</p>
        )}
      </div>
    </div>
  );
};

const CheckoutForm = ({ selectedService, bookingDate, bookingTime, setBookings, setShowPaymentForm }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const newBooking = {
      service: selectedService,
      date: bookingDate,
      time: bookingTime,
      paymentMethodId: paymentMethod.id,
    };

    setBookings((prevBookings) => [...prevBookings, newBooking]);
    setShowPaymentForm(false);
    alert('Service booked and payment successful!');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment for {selectedService.name}</h2>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default ServicePage;



import  { useState } from 'react';
import { Link } from 'react-router-dom';
//import { loadStripe } from '@stripe/stripe-js';
import './ServicePage.css';
import Navbar from './Navbar';
import { Footer } from './Footer';


// const stripePromise = loadStripe('your-publishable-key-here'); 

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
  {
    id: 4,
    name: 'Veterinary Services',
    provider: 'Dr. Alice Brown',
    rating: 4.9,
    reviews: 22,
  },
  {
    id: 5,
    name: 'Pet Training',
    provider: 'Mark Wilson',
    rating: 4.6,
    reviews: 18,
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
      <Navbar />
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={`images/${service.name.toLowerCase().replace(' ', '')}.jpg`}
              alt={service.name}
              className="service-image"
            />
            <h2>{service.name}</h2>
            <p>Provider: {service.provider}</p>
            <p>
              Rating: {service.rating} ({service.reviews} reviews)
            </p>
            <Link to={`/booking/${service.id}`}>
              Book Now
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;

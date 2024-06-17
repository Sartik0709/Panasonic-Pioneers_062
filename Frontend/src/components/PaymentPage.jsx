import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import axios from 'axios';
import '../Payment.css'; // Import your custom CSS for styling

const PaymentPage = () => {
  const { petId } = useParams(); // Get petId from URL params
  const [pet, setPet] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/pets/${petId}`);
        setPet(response.data[0]); // Assuming response.data is an object with pet details
      } catch (err) {
        console.error('Error fetching pet details:', err);
      }
    };
    fetchPetDetails();
  }, [petId]);

  const handleProceedPayment = () => {
    // Logic for handling payment process, e.g., showing QR code or redirecting to payment gateway
    setShowQRCode(true);
  };

  if (!pet) return <p>Loading...</p>;

  return (
    <div className="payment-container payment-main">
      <h2>Payment Details</h2>
      <div className="pet-details payment-pet-details">
        <div className="pet-image payment-pet-image">
          <img src={pet.image} alt={pet.name} />
        </div>
        <div className="pet-info payment-pet-info">
          <h3>{pet.name}</h3>
          <p>Type: {pet.type}</p>
          <p>Breed: {pet.breed}</p>
          <p>Age: {pet.age}</p>
          <p>Owner: {pet.owner}</p>
          <p>Description: {pet.description}</p>
        </div>
        <div className="payment-actions payment-payment-actions">
          <button className="proceed-button payment-proceed-button" onClick={handleProceedPayment}>
            Proceed with Payment
          </button>
          {showQRCode && (
            <div className="payment-qr-code">
              {/* Use your QR code component or image here */}
              <QRCode value={`https://yourpaymentendpoint.com/${petId}`} />
              <img className="payment-logo" src="https://tse3.mm.bing.net/th?id=OIP.HdLjBRvPsYHlLwQxES1_PwHaEK&pid=Api&P=0&h=180" alt="PhonePe Logo" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
 
const CheckoutForm = ({ selectedService, bookingDate, bookingTime, setShowPaymentForm }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const result = await stripe.createToken(card);

    if (result.error) {
      console.error(result.error.message);
    } else {
      alert('Payment successful!');
      setShowPaymentForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;

import {Router} from 'express'

const payment=Router();

payment.post('/generate-phonepe-url', async (req, res) => {
    const { amount, merchantId } = req.body;
    const phonePeUrl = `https://phonepe.com/pay?amount=${amount}&merchantId=${'7975211823@ybl'}`;
    try {
      res.json({ paymentUrl: phonePeUrl });
    } catch (error) {
      console.error('Error generating PhonePe URL:', error);
      res.status(500).send('Internal Server Error');
    }
  });
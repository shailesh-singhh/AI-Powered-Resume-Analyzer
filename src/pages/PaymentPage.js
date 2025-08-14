import React, { useEffect, useState } from 'react';
import { Card, Typography, Spin, message } from 'antd';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

function PaymentPage() {
  const [params] = useSearchParams();
  const resumeId = params.get('resumeId');
  const [payUrl, setPayUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPayUrl() {
      try {
        const { data } = await axios.post('http://localhost:5000/api/payment/initiate', { resumeId });

        // const { data } = await axios.post('/api/payment/initiate', { resumeId });
        setPayUrl(data.payUrl);
      } catch (e) {
        message.error('Could not initiate payment.');
      }
      setLoading(false);
    }
    fetchPayUrl();
  }, [resumeId]);

  // Poll backend for payment status (simulate with timeout here)
  useEffect(() => {
    if (!payUrl) return;
    const interval = setInterval(async () => {
        const { data } = await axios.get(`http://localhost:5000/api/payment/status?resumeId=${resumeId}`);

    //   const { data } = await axios.get(`/api/payment/status?resumeId=${resumeId}`);
      if (data.status === 'paid') {
        clearInterval(interval);
        navigate(`/result/${resumeId}`);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [payUrl, resumeId, navigate]);

  return (
    <Card style={{ maxWidth: 480, margin: 'auto', marginTop: 64 }}>
      <Title level={3}>Pay ₹1 to Analyze Resume</Title>
      {loading ? <Spin /> : (
        <>
          <Text>Scan the QR code below with your UPI app, or click to pay:</Text>
          <img src={payUrl} alt="UPI QR" style={{ width: 256, margin: '16px 0' }} />
        </>
      )}
      <Text type="secondary">After payment, you'll be redirected automatically.</Text>
    </Card>
  );
}

export default PaymentPage;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/result/:id" element={<ResultPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
import React, { useState } from 'react';
import { Upload, Button, Typography, Card, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

function HomePage() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const props = {
    beforeUpload: file => {
      const isPdfOrDocx = file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      if (!isPdfOrDocx) {
        message.error('You can only upload PDF or DOCX files!');
      }
      setFile(isPdfOrDocx ? file : null);
      return false;
    },
    fileList: file ? [file] : []
  };

  const handleUpload = async () => {
    if (!file) return message.error('Please select a resume file!');
    // Send to backend for temp storage, backend returns resumeId
    const formData = new FormData();
    formData.append('resume', file);
    const { data } =await axios.post('http://localhost:5000/api/resume/upload', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
    navigate(`/pay?resumeId=${data.resumeId}`);
  };

  return (
    <Card style={{ maxWidth: 480, margin: 'auto', marginTop: 64 }}>
      <Title level={2}>AI Resume Analyzer</Title>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select Resume (PDF/DOCX)</Button>
      </Upload>
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={handleUpload}
        disabled={!file}
      >
        Proceed to Pay ₹1
      </Button>
    </Card>
  );
}

export default HomePage;
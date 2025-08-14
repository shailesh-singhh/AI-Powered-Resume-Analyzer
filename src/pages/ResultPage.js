import React, { useEffect, useState } from 'react';
import { Card, Typography, Spin, List, Progress } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const { Title, Text } = Typography;

function ResultPage() {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchResult() {
      const { data } = await axios.get(`/api/resume/result/${id}`);
      setResult(data);
    }
    fetchResult();
  }, [id]);

  if (!result) return <Spin style={{ margin: 'auto', marginTop: 100 }} />;

  return (
    <Card style={{ maxWidth: 600, margin: 'auto', marginTop: 64 }}>
      <Title level={2}>Resume Analysis Result</Title>
      <Progress percent={result.score} status="active" />
      <List
        header={<div>Detailed Analysis</div>}
        dataSource={[
          { title: 'Grammar', desc: result.grammar },
          { title: 'Spelling', desc: result.spelling },
          { title: 'Format', desc: result.format },
          { title: 'Skills', desc: result.skills.join(', ') },
          { title: 'Information Completeness', desc: result.completeness },
          { title: 'Projects', desc: result.projects },
          { title: 'Experience', desc: result.experience },
          { title: 'Suggestions', desc: result.suggestions }
        ]}
        renderItem={item => (
          <List.Item>
            <Text strong>{item.title}: </Text> {item.desc}
          </List.Item>
        )}
      />
    </Card>
  );
}

export default ResultPage;

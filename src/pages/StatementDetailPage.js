import React from 'react';
import { useParams } from 'react-router-dom';
import { statementsData } from '../data/StatementData';

import '../styles/StatementDetailPage.css';

const StatementDetailPage = () => {
  const { slug } = useParams();

  const statement = statementsData.find(statement => statement.slug === slug);

  if (!statement) {
    return <div>Statement not found</div>;
  }

  const paragraphs = statement.statement.split('\n');

  return (
    <div className="details-page">
      <h2 className="title">{statement.title}</h2>
      <h3 className="date" >{statement.date}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default StatementDetailPage;
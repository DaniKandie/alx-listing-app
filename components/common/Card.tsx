import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="border rounded p-4 shadow">
    <h2 className="font-bold text-lg">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;

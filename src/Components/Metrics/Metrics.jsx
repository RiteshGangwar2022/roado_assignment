import React from 'react';
import './style.css';
import Card from './Card/Card';
const Metrics = () => {
  return (
    <div className="metrics">
      <Card title="Revenue" subtitle="$56,945" badge={45} fromPercent={4.6} />
      <Card title="Users" subtitle="76.8%" badge={-1.7} fromPercent={4.6} />
      <Card title="New Signups" subtitle="116" badge={0} fromPercent={4.6} />
      <Card title="Retention" subtitle="12.67%" badge={0.6} fromPercent={4.6} />
    </div>
  );
};

export default Metrics;

import React from 'react';
import './style.css';

const Card = ({ title, subtitle, badge, fromPercent }) => {
  return (
    <div className="card">
      <div className="card_header">
        <p className="card_title">{title}</p>
        <p className="card_subtitle">{subtitle}</p>
      </div>
      <div className="card_info">
        <div className={`card_badge ${badge < 0 ? 'negative' : (badge === 0 ? 'zero' : '')}`}>
          {badge >= 0 ? `+${badge}%` : `${badge}%`}
        </div>
        <p className="card_from_percent">From {fromPercent}%</p>
      </div>
    </div>
  );
};

export default Card;

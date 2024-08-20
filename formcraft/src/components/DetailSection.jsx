import React from 'react';
import { FaUser, FaBuilding, FaInfoCircle } from 'react-icons/fa';
import './DetailSection.scss';

const DetailSection = ({ title, details }) => {
  return (
    <div className="detail-section">
      <h3 className="section-title">{title}</h3>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            {detail.icon && <span className="icon">{detail.icon}</span>}
            <span className="text">{detail.label}: {detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailSection;

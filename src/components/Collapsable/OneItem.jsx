import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const OneItem = ({ children, title, initialState }) => {
  const [colaps, setcollaps] = useState(initialState);
  return (
    <div className='collaps-wrapper'>
      <div className='collaps-title' onClick={() => setcollaps(!colaps)}>
        <span>{title}</span>
        <span>{colaps ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      <div className={`collaps-content ${colaps ? 'collapsed' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default OneItem;

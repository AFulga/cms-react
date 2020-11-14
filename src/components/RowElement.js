import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const RowElement = ({ title, author, category, date, editChild }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => setChecked((prev) => !prev);
  return (
    <>
      <div className={`check-box ${checked && 'selected'}`}>
        <FontAwesomeIcon icon={faSquare} onClick={handleCheck} />
        <FontAwesomeIcon icon={faCheckSquare} onClick={handleCheck} />
      </div>
      <div className='flex-2 post-title'>{title}</div>
      <div className='flex-1'>{author}</div>
      <div className='flex-1'>{category}</div>
      <div className='flex-1'>{date}</div>
      <div className='edit-container'>{editChild}</div>
    </>
  );
};

export default RowElement;

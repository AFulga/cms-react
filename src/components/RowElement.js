import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RowElement = ({
  handleClick,
  title,
  author,
  category,
  date,
  editChild,
  isSelected,
}) => {
  return (
    <>
      <div className={`check-box`}>
        {!isSelected ? (
          <FontAwesomeIcon icon={faSquare} />
        ) : (
          <FontAwesomeIcon icon={faCheckSquare} />
        )}
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

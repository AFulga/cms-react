import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Chart } from '../assests/table_chart-black-18dp.svg';

const SideNav = () => {
  return (
    <div className='side-nav'>
      <div className='user-img-container'>
        <FontAwesomeIcon icon={faUser} />
      </div>

      <div className='menu-btn-container'>
        <div className='top-buttons'>
          <div className='menu-posts-btn selected'>
            <Chart />
            <div className='img-background'></div>
          </div>
          <div className='menu-posts-btn'>
            <FontAwesomeIcon icon={faTrash} className='fill-red' />
            <div className='delete-count'>0</div>
            <div className='img-background'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

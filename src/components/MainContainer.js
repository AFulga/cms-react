// import {
//   faUser,
//   faTrash,
//   faSquare,
//   faCheckSquare,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import { ReactComponent as Edit } from '../assests/circle-edit.svg';
import PostRow from './PostRow';
import RowElement from './RowElement';
import UpdateForm from './UpdateForm';

const MainContainer = () => {
  return (
    <div className='main-container'>
      <header>
        <div className='header-container'>
          <h1>My dashboard</h1>
        </div>
      </header>
      {true && (
        <div className='posts-container'>
          <div className='posts-top'>
            <h3>Posts</h3>
            <div className='posts-btn-container'>
              {/* <div className='delete-btn'>Delete</div>
            <div className='menu-add-post'>Add Post</div> */}
              <Button variant='contained' className='delete-btn'>
                Delete
              </Button>
              <Button variant='contained' className='menu-add-post'>
                Add Post
              </Button>
            </div>
          </div>

          <div className='posts-header'>
            <RowElement
              title='Title'
              author='Author'
              category='Category'
              date='Date'
            />
          </div>

          <div className='posts-body-container'>
            <ul id='posts-list'>
              <PostRow
                className='post-row'
                dataPostId='5fa977b333c52a10446933a0'
                type='li'
                title='Technology in a nutshell'
                author='Joe Doe'
                category='Technology'
                date='25/12/20, 1:05PM'
                editChild={<Edit />}
              />
              <PostRow
                className='post-row selected'
                dataPostId='5fa977b333c52a10446933a0'
                type='li'
                title='Technology in a nutshell'
                author='Joe Doe'
                category='Technology'
                date='25/12/20, 1:05PM'
                editChild={<Edit />}
              />
            </ul>
          </div>
        </div>
      )}
      {false && <UpdateForm />}
    </div>
  );
};

export default MainContainer;

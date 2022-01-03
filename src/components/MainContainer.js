import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getMongoUri } from '../helpers';
import Loader from './Loader';
import PostTable from './PostTable';
import UpdateForm from './UpdateForm';

const MainContainer = () => {
  const [state, setState] = useState({
    status: 'idle',
    posts: [],
    error: null,
  });

  useEffect(() => {
    setState({ status: 'pending' });

    fetch('http://localhost:3000/admin/api/posts')
      .then((data) => {
        if (data.status >= 300) {
          throw new Error(`Fetch failed with data status ${data.status}`);
        }
        return data.json();
      })
      .then((posts) => {
        console.log('posts', posts);
        setState({ status: 'resolved', posts });
      })
      .catch((err) => setState({ status: 'rejected', error: err.message }));
  }, []);
  // const posts = [
  //   {
  //     dataPostId: '5fa977b333c52a10446933a0',
  //     title: 'Technology in a nutshell',
  //     author: 'Joe Doe',
  //     category: 'Technology',
  //     date: '25/12/20, 1:05PM',
  //   },
  //   {
  //     dataPostId: '5fa977b333c52a10446933a0',
  //     title: 'Technology in a nutshell',
  //     author: 'Joe Doe',
  //     category: 'Technology',
  //     date: '25/12/20, 1:05PM',
  //   },
  //   {
  //     dataPostId: '5fa977b333c52a10446933a0',
  //     title: 'Technology in a nutshell',
  //     author: 'Joe Doe',
  //     category: 'Technology',
  //     date: '25/12/20, 1:05PM',
  //   },
  //   {
  //     dataPostId: '5fa977b333c52a10446933a0',
  //     title: 'Technology in a nutshell',
  //     author: 'Joe Doe',
  //     category: 'Technology',
  //     date: '25/12/20, 1:05PM',
  //   },
  //   {
  //     dataPostId: '5fa977b333c52a10446933a0',
  //     title: 'Technology in a nutshell',
  //     author: 'Joe Doe',
  //     category: 'Technology',
  //     date: '25/12/20, 1:05PM',
  //   },
  // ];
  return (
    <div className='main-container'>
      <header>
        <div className='header-container'>
          <h1>My dashboard</h1>
        </div>
      </header>
      {state.status === 'resolved' && (
        <div className='posts-container'>
          <div className='posts-top'>
            <h3>Posts</h3>
            <div className='posts-btn-container'>
              <Button variant='contained' className='delete-btn'>
                Delete
              </Button>
              <Button variant='contained' className='menu-add-post'>
                Add Post
              </Button>
            </div>
          </div>

          <PostTable posts={state.posts} />
        </div>
      )}
      {state.status === 'pending' && <Loader />}
      {false && <UpdateForm />}
    </div>
  );
};

export default MainContainer;

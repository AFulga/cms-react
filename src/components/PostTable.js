import { ReactComponent as Edit } from '../assests/circle-edit.svg';
import PostHeader from './PostHeader';
import PostRow from './PostRow';

const PostTable = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <PostHeader
        title='Title'
        author='Author'
        category='Category'
        date='Date'
        isSelected
      />

      <div className='posts-body-container'>
        <ul id='posts-list'>
          {posts.map((post, index) => (
            <PostRow
              className='post-row'
              key={post.title + index}
              editChild={<Edit />}
              {...post}
              isSelected={!!(index % 2)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default PostTable;

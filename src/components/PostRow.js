import { useEffect } from 'react';

const { default: RowElement } = require('./RowElement');

const PostRow = ({ dataPostId, className, isSelected, ...props }) => {
  console.log('a');
  useEffect(() => {
    console.log('b');
    return () => console.log('c');
  });
  console.log('d');
  const cl = isSelected ? 'selected' : '';
  return (
    <li
      className={`${className} ${cl} ${console.log('e')}`}
      data-post-id={dataPostId}
    >
      <RowElement {...props} isSelected={isSelected} />
    </li>
  );
};

export default PostRow;

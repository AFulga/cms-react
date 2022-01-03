import { useState } from 'react';

const { default: RowElement } = require('./RowElement');

const PostHeader = (props) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => setSelected((prev) => !prev);
  const cl = selected ? 'selected' : '';
  return (
    <div className={`posts-header ${cl}`}>
      <RowElement {...props} handleClick={handleClick} />
    </div>
  );
};

export default PostHeader;

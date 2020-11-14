const { default: RowElement } = require('./RowElement');

const PostRow = ({ dataPostId, className, ...props }) => {
  return (
    <li className={className} data-post-id={dataPostId}>
      <RowElement {...props} />
    </li>
  );
};

export default PostRow;

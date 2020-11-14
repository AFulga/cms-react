const { TextField } = require('@material-ui/core');

const UpdateForm = () => {
  return (
    <div class='update-form-container hide-container show-container'>
      <h3>Update Post</h3>

      <form
        className='update-form'
        id='updateForm'
        noValidate
        autoComplete='off'
      >
        <TextField id='postTitle' label='Post Tile' variant='outlined' />
        <TextField id='postCategory' label='Category' variant='outlined' />
        <TextField id='postAuthor' label='Author' variant='outlined' />
        <TextField
          id='postContent'
          label='Content'
          variant='outlined'
          multiline
          rows={10}
        />
      </form>
    </div>
  );
};

export default UpdateForm;

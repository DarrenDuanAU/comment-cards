import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined'

function Note() {
  return (
    <div className="note">
      <div className="note__body">text</div>
      <div className="note__footer">icon</div>
        <DeleteForeverOutlined
          className='note__delete'
          aria-hidden='true'
        ></DeleteForeverOutlined>
    </div>
  )
}
export default Note;
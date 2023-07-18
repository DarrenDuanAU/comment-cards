import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined'

function Note({
  index,
  text,
  deleteNote
}) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      {/* {"index"+index} */}
      <div className="note__footer">
        {/* <DeleteForeverOutlined
          className='note__delete'
          aria-hidden='true'
        ></DeleteForeverOutlined> */}
        <div></div>
        <button
          className='note__delete'
          id={index}
          onClick = {(e) => deleteNote(e.target.id)}
        >delete</button>
      </div>
    </div>
  )
}
export default Note;
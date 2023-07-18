import LinearProgress from '@mui/material/LinearProgress'

function CreateNote({
  textHandler,
  saveNote,
  inputText
}) {
  return (
    <div className="note">
      <textarea
        col='10'
        row='5'
        placeholder='Type...'
        maxLength='100'
        value={inputText}
        onChange={textHandler}
      ></textarea>
      <div className="note__footer">
        <span className="label">{100-inputText.length} left</span>
        <button className="note__save"onClick={saveNote} >
          save
        </button>
      </div>
      <LinearProgress 
        className='char__progess'
        variant='determinate'
        value={inputText.length}
      />
    </div>
  )
}
export default CreateNote;
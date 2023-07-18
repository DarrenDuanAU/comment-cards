import LinearProgress from '@mui/material/LinearProgress'

function CreateNote() {
  return (
    <div className="note">
      <textarea
        col='10'
        row='5'
        value=''
        placeholder='Type...'
        maxLength='100'
      ></textarea>
      <div className="note__footer">
        <span className="label">100 left</span>
        <button className="note__save">save</button>
      </div>
      <LinearProgress 
        className='char__progess'
        variant='determinate'
        value={50}
      />
    </div>
  )
}
export default CreateNote;
import Note from './Note'
import CreateNote from './CreateNote'
import '../css/Note.css'

function Notes() {
  return (
    <div className='notes'>
      <Note/>
      <CreateNote/>
    </div>
  )
}
export default Notes;
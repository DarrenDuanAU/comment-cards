import Note from './Note'
import CreateNote from './CreateNote'
import '../css/Note.css'
import { useEffect, useState,useRef } from 'react'
import { PresentToAll } from '@mui/icons-material'

function Notes() {
  const [notes, setNotes] = useState([])
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'))
    console.log('local data',data,'##')
    if (Array.isArray(data) && data.length !== 0) {
      setNotes(data);
    }
    setLoading(false)
  },[])

  useEffect(() => {
    if (!loading){
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  },[notes,loading])

  const textHandler = (e) => {
    setInputText(e.target.value)
    console.log('value', e.target.value)
  }

  const saveNote = () => {
    setNotes( prevState => [...prevState, inputText])
    setInputText('')
  }

  const deleteNote = (id) => {
    console.log('id',id)
    const index = Number(id)
    setNotes( prevState => { 
      const tempList = [...prevState]
      tempList.splice(index,1)
      return tempList
    })
    // setNotes( preState => ['','',''])
  }

  return (
    <div className='notes'>
      {notes?.map((text,index) => (
        <Note 
          key={index} 
          index={index} 
          text={text} 
          deleteNote={deleteNote}
        />))}
      <CreateNote 
        textHandler={textHandler} 
        saveNote={saveNote}
        inputText={inputText}
      />
      {/* {notes.length} */}
    </div>
  )
}
export default Notes;
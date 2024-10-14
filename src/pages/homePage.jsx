import { useState } from "react"
import { FormNote, NoteList } from "../features"
import { getInitialData } from "../utils"

export const HomePage = () => {
    const [data,setData] = useState(getInitialData())

    function handleAdd(note){
        setData([...data,note])
    }

    function handleAction(id){
      setData(data.filter(note=>{
          if(note.id===id){
              note.archived = !note.archived
          }
          return note
      }))
    }

  return (
    <div className="note-app__body">
        <FormNote onAdd={handleAdd} />
        <NoteList title={'Catatan Aktif'} data={data.filter(note=>!note.archived)} onAction={handleAction}/>
        <NoteList title={'Arsip'} data={data.filter(note=>note.archived)} onAction={handleAction}/>
      </div>
  )
}

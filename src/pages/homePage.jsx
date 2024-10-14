import { useState } from "react"
import { FormNote, NoteList } from "../features"
import { getInitialData } from "../utils"

export const HomePage = () => {
    const [data,setData] = useState(getInitialData())

    function handleAdd(note){
        setData([...data,note])
    }

  return (
    <div className="note-app__body">
        <FormNote onAdd={handleAdd} />
        <NoteList title={'Catatan Aktif'} data={data.filter(note=>!note.archived)}/>
      </div>
  )
}

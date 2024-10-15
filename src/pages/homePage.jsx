import { useState } from "react"
import { FormNote, Header, NoteList } from "../features"
import { getInitialData } from "../utils"

export const HomePage = () => {
    const [data, setData] = useState(getInitialData())
    const [, setSearch] = useState([])
    const [, setIsSearch] = useState(false)

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

    function handleDelete(id){
      setData(data.filter(note=>note.id!==id))
    }

    function handleSearch(keyword){
      if(keyword.length){
          setIsSearch(true)
      }else{
          setIsSearch(false)
      }
      
      setSearch(data.filter(note=>note.title.toLowerCase().includes(keyword.toLowerCase())))
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="note-app__body">
          <FormNote onAdd={handleAdd} />
          <NoteList title={'Catatan Aktif'} data={data.filter(note=>!note.archived)} onAction={handleAction} onDelete={handleDelete}/>
          <NoteList title={'Arsip'} data={data.filter(note=>note.archived)} onAction={handleAction} onDelete={handleDelete}/>
        </div>
    </>
  )
}

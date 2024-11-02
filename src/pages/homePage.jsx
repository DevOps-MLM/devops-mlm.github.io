import { useEffect, useState } from "react"
import { FormNote, Header, NoteList } from "../features"
import ApiService from "../utils/service"

export const HomePage = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    const [isSearch, setIsSearch] = useState(false)
    const [id,setId] = useState(null)

    useEffect(()=>{
      getData()
    }, [])

    async function getData() {
      const data = await ApiService().get()
      setData(data.data)
    }
    
    async function handleAdd(note){
      const store = await ApiService().store(note)
      if(store.status == 200) {
        getData()
      } else {
        alert(store.data.message)
      }
    }

    async function handleUpdate(id, note){
      const store = await ApiService().update(id, note)
      if(store.status == 200) {
        getData()
      } else {
        alert(store.data.message)
      }
    }

    function handleAction(note){
      handleUpdate(note.id, {archived:!note.archived})
    }

    async function handleDelete(id){
      const destroy = await ApiService().destroy(id)
      if(destroy.status == 200) {
        getData()
      } else {
        alert(destroy.data.message)
      }
    }

    function handleSearch(keyword){
      if(keyword.length){
          setIsSearch(true)
      }else{
          setIsSearch(false)
      }
      
      setSearch(data.filter(note=>note.title.toLowerCase().includes(keyword.toLowerCase())))
  }

      function handleEdit(id) {
        setId(id)
      }

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="note-app__body">
          <FormNote onAdd={handleAdd} data={isSearch ? search : data} id={id} setData={setData} setId={setId} onUpdate={handleUpdate}/>
          <NoteList title={'Catatan Aktif'} data={(isSearch ? search : data).filter(note=>!note.archived)} onAction={handleAction} onDelete={handleDelete} onEdit={handleEdit}/>
          <NoteList title={'Arsip'} data={(isSearch ? search : data).filter(note=>note.archived)} onAction={handleAction} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
    </>
  )
}

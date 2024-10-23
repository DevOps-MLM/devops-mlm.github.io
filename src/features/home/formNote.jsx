import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
export const FormNote = ({onAdd, id,setId, data= [], setData}) => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [titleLength] = useState(50)

    useEffect(()=>{
        if(id) {
            handleEdit()
        }
    }, [id])

    function handleEdit() {
        var dt = data.find(note=>note.id==id)
        setTitle(dt.title)
        setBody(dt.body)
    }

    function handleSubmit(event){
        event.preventDefault()
        if(id) {
            setData(data.map(note=>{
                if(note.id == id) {
                    return {...note, title, body}
                } else {
                    return note
                }
            }))
        } else {
            let now = new Date()
            let newNote = {
                id: now.getTime(),
                title,
                body,
                archived: false, 
                createdAt: now,
            }

            if(title == '' || body == '') {
                alert('isi dulu bos')
            } else {
                onAdd(newNote)
            }
        }

        setTitle('')
        setBody('')
        setId(null)
    }
    
  return (
    <>
    <div className="note-input">
            <h2>Buat catatan</h2>
            <form onSubmit={handleSubmit}>
                <p className="note-input__title__char-limit">Sisa karakter: {titleLength-title.length}</p>
                <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." maxLength={titleLength} onChange={(event)=>setTitle(event.target.value)} value={title}/>
                <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." onChange={(event)=>setBody(event.target.value)} value={body}></textarea>
                <button type="submit">{id != null ? 'Update' :'Buat'}</button>
            </form>
        </div>
    </>
  )
}

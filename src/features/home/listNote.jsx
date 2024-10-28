/* eslint-disable react/prop-types */
import EmptyNote from "./emptyNote";
import NoteItem from "./itemNote";

 
export default function NoteList({title, data, onDelete, onAction, onEdit}){

    return(
        <>
            <h2>{title}</h2>
            {
                 
                data.length ? <div className="notes-list">{data.map(note=><NoteItem key={note.id} note={note} onDelete={onDelete} onAction={onAction} onEdit={onEdit}/>)}</div> : <EmptyNote />
            }
        </>
    )
}
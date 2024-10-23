/* eslint-disable react/prop-types */
import EmptyNote from "./emptyNote";
import NoteItem from "./itemNote";

 
export default function NoteList({title, data, onDelete, onAction, onEdit}){

    return(
        <>
            <h2>{title}</h2>
            {
                // eslint-disable-next-line react/jsx-key
                data.length ? <div className="notes-list">{data.map(note=><NoteItem note={note} onDelete={onDelete} onAction={onAction} onEdit={onEdit}/>)}</div> : <EmptyNote />
            }
        </>
    )
}
/* eslint-disable react/prop-types */
import EmptyNote from "./emptyNote";
import NoteItem from "./itemNote";

// eslint-disable-next-line react/prop-types
export default function NoteList({title, data, onDelete, onAction}){

    return(
        <>
            <h2>{title}</h2>
            {
                // eslint-disable-next-line react/jsx-key
                data.length ? <div className="notes-list">{data.map(note=><NoteItem note={note} onDelete={onDelete} onAction={onAction}/>)}</div> : <EmptyNote />
            }
        </>
    )
}
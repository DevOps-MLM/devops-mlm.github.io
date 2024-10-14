import EmptyNote from "./emptyNote";
import NoteItem from "./itemNote";

export default function NoteList({title,data, onDelete, onAction}){

    return(
        <>
            <h2>{title}</h2>
            {
                data.length ? <div className="notes-list">{data.map(note=><NoteItem note={note} onDelete={onDelete} onAction={onAction}/>)}</div> : <EmptyNote />
            }
        </>
    )
}
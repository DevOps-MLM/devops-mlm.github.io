/* eslint-disable react/prop-types */
import { showFormattedDate } from "../../utils";

// eslint-disable-next-line react/prop-types
export default function NoteItem({note, onDelete, onAction}){
    return (
        <div className="note-item" key={note.id}>
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(note.id)}>Delete</button>
                <button className="note-item__archive-button" onClick={() => onAction(note.id)}>{note.archived ? 'Pindahkan' : 'Arsipkan'}</button>
            </div>
        </div>
    )
}
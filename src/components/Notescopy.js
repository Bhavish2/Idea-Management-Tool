import Note from './Note';
import AddNote from './AddNote';
import Noten from './Noten';


const Notescopy = ({
	notes,
	handleDeleteNote,
  handle,
}) => {
	return (
    <div className='lighter'>
    <div className='decorater'>{handle}</div>
		<div className='note-list-copy'>
			{notes.map((note) => (
				<Noten
					id={note.id}
					head={note.head}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
		</div>
    </div>

	);
};

export default Notescopy;

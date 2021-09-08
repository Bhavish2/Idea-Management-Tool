import { useState, useEffect,useRef } from 'react';
import Note from './Note';
import NotesList from './NotesList';
import Notescopy from './Notescopy';


const Notesmode = ({
	notes,
  noteMode,
	handleDeleteNote,
}) => {

const author=new Map([...notes.map(note=>([note.head]))]);
	return (

    <div className='container'>
		<div className='notes-list'>
			{[...author].map((note) => (
				/*	<Note
						id={note.id}
						head={note.head}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
					/>*/
					<Notescopy notes={notes.filter((notek)=>note.includes(notek.head))} handleDeleteNote={handleDeleteNote} handle={note}/>
				))}
		</div>
    </div>


	);
};

export default Notesmode;

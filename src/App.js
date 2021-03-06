import { useState, useEffect,useRef } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Notesmode from './components/Notesmode';





const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			head: 'Primary',
			text: 'This is my first note!',
			date: '08/09/2021',
		},
		{
			id: nanoid(),
			head: 'Default',
			text: 'This is my second note!',
			date: '08/09/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [noteMode, setnoteMode] = useState(false);



	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (head,text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			head: head,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};



	return (
		<div className={`${noteMode && 'note-mode'}`} className='back'>
			<Header handleToggleDarkMode={setnoteMode} notep={noteMode} />
				{ noteMode && <Notesmode
				 notes={notes} handleDeleteNote={deleteNote}/>}

				 {!noteMode && 	<div className='container'>
		 				<Search handleSearchNote={setSearchText} />
		 				<NotesList
		 					notes={notes.filter((note) =>
		 					note.text.includes(searchText)
		 				)}
		 					handleAddNote={addNote}
		 					handleDeleteNote={deleteNote}
		 				/>
		 			</div>}
       </div>
	);
};

export default App;

import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const[noteheader,setNoteheader]=useState('');
	const characterLimit = 200;

	const handleHead= (event)=>{
		console.log(event.target.value);
		 setNoteheader(event.target.value);
	};

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			console.log(event.target.value);
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
       	if (noteText.trim().length > 0) {
			console.log('yes');
			handleAddNote(noteText,noteheader);
			setNoteText('');
			setNoteheader('');
				console.log('yes');
   }
	};



	return (
		<div className='note new'>
		<textarea
		placeholder='Type heading of note..'
		value={noteheader}
		onChange={handleHead}
		></textarea>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;

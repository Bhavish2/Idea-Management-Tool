import { MdDeleteForever } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';

const Note = ({ id,head,text,date, handleDeleteNote }) => {
	return (
		<div className='note'>
		<div className='top'>{head}</div>
			<span className='to'>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;

import { MdDeleteForever } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';

const Noten = ({ id,head,text,date, handleDeleteNote }) => {
	return (
		<div className='note-copy'>
			<span className='lo'>{text}</span>
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

export default Noten;

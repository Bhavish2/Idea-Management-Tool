import React from 'react';

const Header = ({ handleToggleDarkMode,notep }) => {
	return (
		<div className='header'>
			<h1 style={{ color: 'white' }}>Idea Managment Tool</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousnoteMode) =>!previousnoteMode
					)
				}
				className='save'
			>
       {notep ? <span>Ungroup</span>:<span>Group Together</span>}
			</button>
		</div>
	);
};

export default Header;

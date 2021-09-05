import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1 style={{ color: 'white' }}>Idea Managment Tool</h1>
			<div
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) =>previousDarkMode
					)
				}
				className='save'
			>
			</div>
		</div>
	);
};

export default Header;

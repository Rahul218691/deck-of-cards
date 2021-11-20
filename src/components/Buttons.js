import React from 'react';

const Buttons = ({shuffle,piccards}) =>{
	return(
			<>
				<button className="btn btn-secondary" onClick={shuffle}>Shuffle</button>
				<button onClick={piccards} className="btn btn-secondary">Pick 5 Cards</button>
			</>
		)
}

export default Buttons;
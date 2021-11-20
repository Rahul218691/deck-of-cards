import React from 'react';
import {Card} from 'react-bootstrap'
import {GiCottonFlower} from 'react-icons/gi';
import { IoMdFlower } from "react-icons/io";
import { BsSuitHeartFill,BsFillDiamondFill } from "react-icons/bs";

const MainDeck = ({data}) =>{
	return(
			<>
				{
					data.map(deck=>(
						<Card key={deck.id} style={{ width: '18rem' }}>
						  <Card.Body>
						    <Card.Title>{deck.cardNum}
						    	{
						    		deck.symbol === "BsFillDiamondFill" ?
						    		<BsFillDiamondFill />
						    		: deck.symbol === "IoMdFlower" ?
						    		<IoMdFlower />
						    		: deck.symbol === "GiCottonFlower" ?
						    		<GiCottonFlower /> :
						    		deck.symbol === "BsSuitHeartFill" ?
						    		<BsSuitHeartFill />
						    		:null
						    	}
						    </Card.Title>
						    <Card.Text>
						    	{
						    		deck.symbol === "BsFillDiamondFill" ?
						    		<BsFillDiamondFill />
						    		: deck.symbol === "IoMdFlower" ?
						    		<IoMdFlower />
						    		: deck.symbol === "GiCottonFlower" ?
						    		<GiCottonFlower /> :
						    		deck.symbol === "BsSuitHeartFill" ?
						    		<BsSuitHeartFill />
						    		:null
						    	}						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						    	{
						    		deck.symbol === "BsFillDiamondFill" ?
						    		<BsFillDiamondFill />
						    		: deck.symbol === "IoMdFlower" ?
						    		<IoMdFlower />
						    		: deck.symbol === "GiCottonFlower" ?
						    		<GiCottonFlower /> :
						    		deck.symbol === "BsSuitHeartFill" ?
						    		<BsSuitHeartFill />
						    		:null
						    	}
						    	{deck.cardNum}					  	
						  </Card.Footer>
						</Card>
						))
				}
			</>
		)
}

export default MainDeck;
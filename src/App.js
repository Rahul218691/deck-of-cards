import React,{useState,useEffect} from 'react';
import {MainDeck,Shuffled,Buttons} from './components'
import Decks from './utils/deckArray';


const App = () =>{

   const [data,setData] = useState([]);
   const [shufCards,setShuffleCards] = useState([]);

    useEffect(()=>{
      setData(Decks)
    },[])

    const shuffleDeck = () =>{
      let newarr = [...data];
      let shuff = newarr.sort( () => 0.5 - Math.random() );
      setData(shuff);
    }

    const pickCards = () =>{
      let newCards = [...data];
      let num =Math.floor(Math.random() * newCards.length -4);
      let slicedData = newCards.slice(parseInt(num),(num + 5));
      let filtersliced = newCards.filter(function(item){
        return !slicedData.find(function(item1){
          return item.id === item1.id
        })
      })
      console.log(num)
      // console.log(slicedData)
      // console.log(filtersliced)
      setData(filtersliced);
      setShuffleCards(slicedData)
    }

  return (
    <div className="App container-fluid p-0">
      <div className="app__deck">
        <MainDeck data={data}/>
      </div>
      <div className="app__buttons">
        <Buttons shuffle={shuffleDeck}
        piccards={pickCards}/>
      </div>
      <div className="app__shuffled">
        <Shuffled shufCards={shufCards}/>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';

const looser = {
  filter: 'grayscale(100%)',
};
const winners = {border: 'solid 5px green',}

export default function Root(props) {
  const games = JSON.parse(localStorage.getItem("games"))|| [];
  console.log(games);
  const listItems = games.map((game) =>   
  <li key={game.id}>
    <img src={game.url1} width="200" style={game.winner == 1 ? winners : looser}/>
    <img src={game.url2} width="200" style={game.winner == 2 ? winners : looser}/>
    {game.winner == 3 ? ' nobody won' : ' Winner' + game.winner}
  </li>  );
  return <section>{listItems}</section>;
}

import React from "react";

import Article from "../components/Article";
import anime from "./anime.jpg"

export default class Featured extends React.Component {
  render() {
    console.log("featured");
    return (
      <div>
        <Article key={1} title='Hello' photo={anime} description="Pornoto e mnogo qko"/>
        <Article key={2} title='Bitches' photo={anime} description="Pornoto e mnogo qko 1 "/>
        <Article key={3} title='Suck' photo={anime} description="Pornoto e mnogo qko 2 "/>
        <Article key={4} title='It' photo={anime} description="Pornoto e mnogo qko 33 3"/>
        <Article key={5} title='All' photo={anime} description="Pornoto e mnogo qko 4 "/>
      </div>
    );
  }
}

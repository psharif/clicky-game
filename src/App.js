import React, { Component } from "react";
import KingCard from "./components/KingCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import kings from "./kings.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the kings json array
  state = {
    kings, 
    chosen : [], 
    gameStatus : "Spot The Difference Game"
  };

  checkDone = () =>{
    if(this.state.chosen.length === 16) this.setState({gameStatus: "You Won"});
    if(this.includesDuplicates()) this.setState({gameStatus: "You Lost"});
    return this.state.chosen.length === 16 || this.includesDuplicates();
  };

  includesDuplicates = () =>{
     return new Set(this.state.chosen).size !== this.state.chosen.length;
  }

  selectKing = id => {
    //Push the id of the cards that have been chosen
    this.state.chosen.push(id);
    ///Remove This //////////////////
    console.log(this.state.chosen);
    //////////////////////////////////
    if(!this.checkDone()){
      const order = this.shuffleCards();
      const kings = this.state.kings.map((king, i) => {
        return this.state.kings.find(card => card.id === order[i]);
      });
      this.setState({kings});
    }
  };

  shuffleCards = () => {
    const ordered = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const shuffled = [];
    let chosen, random;  

    while(ordered.length > 0){
      random = Math.floor(Math.random() * (ordered.length));
      chosen = ordered.splice(random,1)[0];
      shuffled.unshift(chosen);
    }
    return shuffled;
  }

  // Map over this.state.friends and render a KingCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>{this.state.gameStatus}</Title>
        {this.state.kings.map(king => (
          <KingCard
            selectKing={this.selectKing}
            id={king.id}
            key={king.id}
            name={king.name}
            image={king.image}
            occupation={king.occupation}
            location={king.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import KingCard from "./components/KingCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import kings from "./kings.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    kings
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const kings = this.state.kings.filter(king => king.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ kings });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Spot The Difference Game</Title>
        {this.state.kings.map(king => (
          <KingCard
            removeFriend={this.removeFriend}
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

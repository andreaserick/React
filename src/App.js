import React, { Component } from "react";
import Header from "./Components/Header";
import Players from "./Components/Players";

import "./App.css";

class App extends Component {
  state = {
    players: [
      { name: "Erick", id: 1 },
      { name: "Andreas", id: 2 },
      { name: "Bogdan", id: 3 },
      { name: "Lorena", id: 4 }
    ]
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Whatever!" numar={this.state.players.length} />
        {this.state.players.map(players => (
          <Players
            key={players.id.toString()}
            id={players.id}
            name={players.name}
          />
        ))}
       
      </div>
    );
  }
}

export default App;

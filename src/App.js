import React, { Component } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Candidates from './components/Candidates';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
    };
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://localhost:5500/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          // const improvedCandidates = json.candidates.map(candidate =>)
          this.setState({
            candidates: json.candidates,
          });
        });
    }, 1000);
  }
  render() {
    const { candidates } = this.state;
    if (candidates.length === 0) {
      return <Spinner description="Carregando..." />;
    }
    return (
      <div className="container">
        <Header>Votação</Header>
        <Candidates candidates={candidates} />
      </div>
    );
  }
}

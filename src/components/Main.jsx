import React from 'react';

import electronics from '../data/electronics';
import Table from './Table';
import Search from './Search';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      electronics,
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let electronics = this.state.electronics.filter(electronic =>
      electronic.name
        .toLocaleLowerCase()
        .replace(/\s+/g, '')
        .includes(this.state.search.toLocaleLowerCase().replace(/\s+/g, ''))
    );
    return (
      <main>
        <Search search={this.state.search} handleChange={this.handleChange} />
        <Table electronics={electronics} />
      </main>
    );
  }
}

export default Main;

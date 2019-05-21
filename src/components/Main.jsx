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
      isBoolean: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSort(who) {
    const { electronics, isBoolean } = this.state;

    electronics.sort((a, b) => {
      if (isBoolean) {
        if (typeof a[who] === 'number') {
          return a[who] - b[who];
        } else if (typeof a[who] === 'string') {
          return a[who].localeCompare(b[who]);
        }

        return a[who] === b[who];
      }
      if (!isBoolean) {
        if (typeof a[who] === 'number') {
          return b[who] - a[who];
        } else if (typeof a[who] === 'string') {
          return b[who].localeCompare(a[who]);
        }

        return a[who] === b[who];
      }
    });

    this.setState({
      electronics,
      isBoolean: !isBoolean,
    });
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
        <Table electronics={electronics} sort={this.handleSort} />
      </main>
    );
  }
}

export default Main;

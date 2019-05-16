import React from 'react';

import phones from '../data/phones';
import Table from './Table';
import Search from './Search';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones,
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let phones = this.state.phones.filter(phone =>
      phone.name
        .toLocaleLowerCase()
        .replace(/\s+/g, '')
        .includes(this.state.search.toLocaleLowerCase().replace(/\s+/g, ''))
    );
    return (
      <main>
        <Search search={this.state.search} handleChange={this.handleChange} />
        <Table phones={phones} />
      </main>
    );
  }
}

export default Main;

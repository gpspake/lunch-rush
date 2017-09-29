import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {

    const { name, votes, user, handleSelect, handleDeselect } = this.props;

    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <ul>
          { votes && map(votes, (user, key) => <li key={key}>{ user }</li>)}
        </ul>
        <button onClick={handleSelect}>Yeah, I'd go there</button>
        <button className="destructive" onClick={handleDeselect}>Nah, never mind</button>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;

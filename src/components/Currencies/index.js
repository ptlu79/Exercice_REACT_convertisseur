/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';


class Currencies extends React.Component {
  render() {
    const {
      currencies,
      handleClick,
      search,
      handleSearchChange,
    } = this.props;

    return (
      <div className="currencies">
        <input
          className="currencies-search"
          type="text"
          placeholder="Rechercher"
          value={search}
          onChange={(event) => {
            handleSearchChange(event.currentTarget.value);
          }}
        />
        <ul>
          {
            currencies.map((currency) => (
              <li
                key={currency.name}
                className="currency"
                onClick={() => {
                  handleClick(currency.name);
                }}
              >
                {currency.name}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default Currencies;

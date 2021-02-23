import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount, setBaseAmount, handleSubmit }) => (
  <header className="header">
    <h1 className="header-title">Convertisseur</h1>
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}
    >
      <input
        type="text"
        className="header-input"
        value={baseAmount}
        onChange={(event) => {
          setBaseAmount(parseFloat(event.currentTarget.value));
        }}
      />
    </form>
    <p className="header-amount">euro(s)</p>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

import icone from '../../assets/search_icon_menu.png';

const CustomButton = ({ open, manageClick }) => {
  let className = 'custom-button close';
  if (open) {
    className += 'custom-button--open';
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        manageClick(!open);
      }}
    >
      <img id="button_icon" src={icone} alt="recherche de devise" />
    </button>
  );
};

CustomButton.propTypes = {
  open: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default CustomButton;

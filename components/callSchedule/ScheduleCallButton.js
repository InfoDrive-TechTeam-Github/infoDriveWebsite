import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleCallButton.module.css';

const ScheduleCallButton = ({ text, onClick, isSmallScreen }) => {
  return (
    <div>
      {isSmallScreen ? (
        <a href="/contact-us.html" className={styles.fab}>
          {text}
        </a>
      ) : (
        <button className={styles.fab} onClick={onClick}>
          {text}
        </button>
      )}
    </div>
  );
};

ScheduleCallButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default ScheduleCallButton;

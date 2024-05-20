import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleCallButton.module.css';

const ScheduleCallButton = ({ text, onClick }) => {
  return (
    <button className={styles.fab} onClick={onClick}>
      {text}
    </button>
  );
};

ScheduleCallButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ScheduleCallButton;

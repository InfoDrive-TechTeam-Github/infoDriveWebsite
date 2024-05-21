import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleCallButton.module.css';

const ScheduleCallButton = ({ text, onClick }) => {
  return (
    <div>
        <button className={styles.fab} onClick={onClick}>
          {text}
        </button>
    </div>
  );
};

ScheduleCallButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ScheduleCallButton;

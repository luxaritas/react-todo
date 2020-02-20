import React from 'react';
import styles from './Panel.module.css';

export default function Panel({heading, children, className}) {
  return (
    <div className={`${className} ${styles.panel}`}>
      <h2 className={styles.heading}>{heading}</h2>
      {children}
    </div>
  );
}
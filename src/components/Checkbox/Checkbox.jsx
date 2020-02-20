import React from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox({children, checked, onChange}) {
    return (
        <label className={`${styles.label} ${checked ? styles.checked : ''}`}>
            <input type="checkbox" className={styles.checkbox} checked={checked} onChange={onChange}/>
            {children}
        </label>
    );
}
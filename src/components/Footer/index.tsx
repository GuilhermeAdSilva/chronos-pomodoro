import type React from 'react';
import styles from './styles.module.css';

export function Footer() {
  return <footer className={styles.footer}>
    <a href="#">Entenda como funciona a técnica pomodoro</a>
    <a href="#">Chronos pomodoro &copy; {new Date().getFullYear()} - Feito com &#x1F49A;</a>
  </footer>;
}

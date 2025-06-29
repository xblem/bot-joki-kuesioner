import styles from './Button.module.css';

// variant bisa 'primary' atau 'secondary'
// ...props akan meneruskan atribut lain seperti 'onClick'
const Button = ({ children, variant = 'primary', ...props }) => {
  const buttonClass = variant === 'primary' ? styles.primary : styles.secondary;

  return (
    <button className={`${styles.btn} ${buttonClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
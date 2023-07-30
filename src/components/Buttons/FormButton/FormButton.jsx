import styles from './FormButton.module.scss';

const FormButton = () => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>Hover me</button>
    </div>
  );
};

export default FormButton;

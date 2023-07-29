import styles from './Footer.module.scss';

const Footer = ({ caveat }) => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>footer</div>
    </footer>
  );
};

export default Footer;

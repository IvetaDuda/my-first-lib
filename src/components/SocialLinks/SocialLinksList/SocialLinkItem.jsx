import React from 'react';
import styles from './SocialLink.module.scss';

const SocialLinkItem = ({
  name,
  spriteIcon,
  customBlockSize,
  customIconSize,
}) => (
  <li className={`${styles.itemSocialLink} ${styles[name]} ${customBlockSize}`}>
    <span>
      <svg className={`${styles.iconSocialLink}  ${customIconSize}`}>
        <use href={spriteIcon} />
      </svg>
    </span>
  </li>
);

export default SocialLinkItem;

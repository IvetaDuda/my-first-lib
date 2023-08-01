import React from 'react';
import { socialData } from './social';
import SocialLinkItem from './SocialLinkItem';
// import sprite from 'sprite.svg';
import styles from './SocialLink.module.scss';

const SocialLinksList = ({
  customBlockSize,
  customIconSize,
  customPosition,
}) => (
  <ul className={`${styles.listWrapper} ${customPosition}`}>
    {socialData.map(({ id, name, arialabel }) => {
      const spriteIcon = `sprite.svg#icon-${name}`;

      return (
        <SocialLinkItem
          key={id}
          name={name}
          // path={path}
          arialabel={arialabel}
          spriteIcon={spriteIcon}
          customBlockSize={customBlockSize}
          customIconSize={customIconSize}
        />
      );
    })}
  </ul>
);

export default SocialLinksList;

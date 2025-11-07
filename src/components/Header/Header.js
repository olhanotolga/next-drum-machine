'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import { useSoundContext } from '../../context/SoundProvider';
import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';

function Header() {
  const id = React.useId();

  const { isSoundOn, toggleSound } = useSoundContext();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href='/'>Kool Website</a>

        <button onClick={toggleSound}>
          {isSoundOn ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {isSoundOn ? 'Disable sound effects' : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;

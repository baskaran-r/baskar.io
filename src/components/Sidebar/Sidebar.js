// @flow strict
import React from 'react';
import Author from './Author';
import Menu from '../Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata, useDeviceDetect } from '../../hooks';
import MovableSidebarContent from '../MovableSidebarContent';

const Sidebar = () => {
  const { author } = useSiteMetadata();
  const { isMobile } = useDeviceDetect();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} />
        <Menu horizontal={isMobile} />
        <MovableSidebarContent desktop />
      </div>
    </div>
  );
};

export default Sidebar;

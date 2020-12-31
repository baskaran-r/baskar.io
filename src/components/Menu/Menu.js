// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {|
  +horizontal?: boolean,
  +noMargin?: boolean,
  +bold?: boolean,
|};

const cx = classNames.bind(styles);

const Menu = ({ horizontal, noMargin }: Props) => {
  const { menu } = useSiteMetadata();

  return (
    <nav
      className={cx({
        menu: true,
        horizontal,
        'no-margin': noMargin,
      })}
    >
      <ul className={styles['menu__list']}>
        {menu.map((item) => (
          <li className={styles['menu__list-item']} key={item.path}>
            <Link
              to={item.path}
              className={styles['menu__list-item-link']}
              activeClassName={styles['menu__list-item-link--active']}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

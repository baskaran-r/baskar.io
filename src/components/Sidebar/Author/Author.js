// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  }
};

const Author = ({ author } : Props) => (
  <div className={styles['author']}>
    <div className={styles['author__main-section']}>
      <Link to="/">
        <img src={withPrefix(author.photo)} className={styles['author__photo']} alt={author.name} />
      </Link>
      <div className={styles['author__title']}>
        <h1>
          <Link className={styles['author__title-link']} to="/">
            {author.name}
          </Link>
        </h1>
      </div>
    </div>
    <p className={styles['author__subtitle']} dangerouslySetInnerHTML={{ __html: author.bio }} />
  </div>
);

export default Author;

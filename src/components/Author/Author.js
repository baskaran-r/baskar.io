// @flow strict
import { Link, withPrefix } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from '../../hooks';
import { getContactHref } from '../../utils';

import styles from './Author.module.scss';

export const Author = ({ showBio, showTwitter, small }) => {
  const photoSizeWithOutBio = small ? 40 : 48;
  const photoSize = showBio ? 60 : photoSizeWithOutBio;
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <div className={styles['author__header']}>
        <Link to="/" className={styles['author__header-photo']}>
          <img
            src={withPrefix(author.photo)}
            width={photoSize}
            height={photoSize}
            alt={author.name}
          />
        </Link>
        <div className={styles['author__header-right']}>
          <h4 className={styles['author__header-right-name']}>
            <Link
              className={styles['author__header-right-name-link']}
              to="/"
              rel="author"
            >
              {author.name}
            </Link>
            {showTwitter && ' '}
            {showTwitter && (
              <a
                style={{ fontWeight: 500 }}
                href={getContactHref('twitter', author.contacts.twitter)}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{author.contacts.twitter}
              </a>
            )}
          </h4>
          {showBio && (
            <p
              className={styles['author__header-right-bio']}
              dangerouslySetInnerHTML={{ __html: author.bio }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Author;

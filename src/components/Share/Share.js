// @flow strict

import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';

import { logEvent } from '../../utils/log';
import styles from './Share.module.scss';

type Props = {
  +title: string,
  +url?: string,
  +shareText?: string,
  +twitter?: string
};

const Share = ({
  title, url, shareText, twitter
}: Props) => {
  const urlToShare = url || window.location.href || '';

  return (
    <div className={styles['share']}>
      <h4 className={styles['share-title']}>{shareText || 'SHARE THIS POST'}</h4>
      <div className={styles['share-buttons']}>
        <FacebookShareButton
          beforeOnClick={() => logEvent('ShareButton', 'facebook-click')}
          className={styles['facebook']}
          resetButtonStyle={false}
          url={urlToShare}
        >
          Facebook
        </FacebookShareButton>
        <TwitterShareButton
          beforeOnClick={() => logEvent('ShareButton', 'twitter-click')}
          className={styles['twitter']}
          resetButtonStyle={false}
          url={urlToShare}
          title={title}
          via={twitter}
        >
          Twitter
        </TwitterShareButton>
        <LinkedinShareButton
          beforeOnClick={() => logEvent('ShareButton', 'linkedin-click')}
          className={styles['linkedin']}
          resetButtonStyle={false}
          url={urlToShare}
          title={title}
        >
          LinkedIn
        </LinkedinShareButton>
        <RedditShareButton
          beforeOnClick={() => logEvent('ShareButton', 'reddit-click')}
          className={styles['reddit']}
          resetButtonStyle={false}
          url={urlToShare}
          title={title}
        >
          Reddit
        </RedditShareButton>
      </div>
    </div>
  );
};

export default Share;

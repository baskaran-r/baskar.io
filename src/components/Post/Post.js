// @flow strict
import React from 'react';
import Author from '../Author';
import Share from '../Share';
// import Comments from './Comments';
import Content from './Content';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type AuthorType = {
  contacts: any
}
type Props = {
  post: Node,
  author: AuthorType
};

const Post = ({ post, author }) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const currentUrl = window.location.href || '';

  return (
    <div className={styles['post']}>
      <div className={styles['post__content']}>
        <Content body={html} title={title} date={date} />
      </div>

      <div className={styles['post__footer']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author showBio showTwitter />
        <Share url={currentUrl} title={title} twitter={author.contacts.twitter} />
      </div>

      {/* <div className={styles["post__comments"]}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div> */}
    </div>
  );
};

export default Post;

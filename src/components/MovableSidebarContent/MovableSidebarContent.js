// @flow strict
import React from 'react';

import Contacts from '../Contacts';
import Copyright from '../Copyright';
import DisplayIf from '../DisplayIf';
import { useSiteMetadata } from '../../hooks';

type Props = {
  +mobile?: boolean,
  +desktop?: boolean
};

export const MovableSidebarContent = ({ mobile, desktop }: Props) => {
  const { author, copyright } = useSiteMetadata();

  return (
    <DisplayIf mobile={mobile} desktop={desktop}>
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </DisplayIf>
  );
};

export default MovableSidebarContent;

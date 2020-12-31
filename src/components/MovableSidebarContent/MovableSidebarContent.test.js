import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../types';

import { MovableSidebarContent } from './MovableSidebarContent';

describe('MovableSidebarContent', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const props = {
      data: {
        site: {
          siteMetadata: {
            author: {
              contacts: {
                email: '#',
                twitter: '#',
                github: '#',
              },
            },
            copyright: 'copyright',
          },
        },
      },
    };

    const tree = renderer.create(<MovableSidebarContent {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

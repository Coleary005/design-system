import { configure } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import 'loki/configure-react';

import './assets/stylesheets/storybook.scss';

addParameters({
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
});

configure(
  [
    require.context('./', false, /intro\.stories\.mdx/),
    require.context('./', false, /foundation\.stories\.mdx/),
    require.context('../src/components', true, /\.stories\.(js|ts|tsx|mdx)$/)
  ],
  module
);

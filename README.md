# EBTH's Design System

[![CircleCI](https://circleci.com/gh/ebth/design-system.svg?style=shield&circle-token=9bcd48684d05cc04147edccac73f1c8a2c79e112)](https://circleci.com/gh/ebth/design-system)
[![npm version](https://badge.fury.io/js/%40ebth%2Fdesign-system.svg)](https://badge.fury.io/js/%40ebth%2Fdesign-system)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e8abf313-7dfd-4ac7-98ea-3e9f5bfc19c2/deploy-status)](https://app.netlify.com/sites/ebth-design/deploys)

UI Component library and style helper mixins for SCSS.

## Usage

1. Install library

    ```bash
    yarn add @ebth/design-system
    ```

1. Import components

    ```tsx
    import * as React from 'react';
    import { Button } from '@ebth/design-system';

    type Props = {
        label: string;
    }

    export const MyButton: React.FC<Props> = ({ label }) => (
        <Button>{label}</Button>
    );
    ```

1. Import shared utility classes (optional)

    ```scss
    @import '@ebth/design-system/dist/utility';
    ```

### Creating your own components

1. Define your styles

    ```scss
    // import base utility mixins and variables (if needed)
    @import '@ebth/design-system/dist/base';

    .my-button {
        background-color: $green-300;
        color: $text-color;
    }
    ```

1. Create your component

    ```tsx
    import * as React from 'react';
    import { Button } from '@ebth/design-system';

    type Props = {
        label: string;
    }

    export const MyButton: React.FC<Props> = ({ label }) => (
        <Button className="my-button">{label}</Button>
    );
    ```

## Contributing

Please see documentation for [contributing here](./CONTRIBUTING.md).

## License

MIT License.

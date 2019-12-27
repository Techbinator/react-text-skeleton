# React Text Skeleton

A simple and small react library in order to create a text skeleton that either blurs out a dummy text or displays a loading gradient until the final text is loaded. The advantage is that it the blurred/gradient length is determined by the dummy text that should aproximatelly match the length of the data that is going to be fetched(it also takes in consideration the font-size). This way it creates a nice simple effect without the need of measuring the data that is beining loaded in a fixed pixel ratio.
Demo: https://techbinator.github.io/react-text-skeleton

## Features

- React Text Skeleton Loader
- You can create easily a text skeleton without providing exact dimensions
- You can select from blurred or gradient effect
- Can override the styles
- It takes the parrent and/or children css properties (like font size or font type) and it generates the effect while keepping the exact dimensions.

## Installation

`npm i react-text-skeleton`

## Usage

Add the dummyText prop while having a text similar to the one that is fetched. For example if a price that has 3 digits set the dummyText with a 3 digits number. Once the children prop is provided the blurring and dummy text are replaced with that.

```js
<TextSkeleton dummyText="Dummy text">{realText}</TextSkeleton>
```

dummyText: string;
className?: string;
skeletonType?: 'blurred' | 'gradient';

# Props

### `<TextSkeleton>`

| Name         | Type   | Default   | Description                                                                                                                |
| ------------ | ------ | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| dummyText    | string | null      | Mandatory field, provide a string of a length that has aproximatelly the same dimensions as the data that is being fetched |
| className    | string | ''        | Extra class(es) that would be prepended                                                                                    |
| skeletonType | string | 'blurred' | The desired effect can be either 'blurred' or 'gradient'                                                                   |

## Example

```js
import React from 'react';

import TextSkeleton from 'react-text-skeleton';

const App: React.FC = () => {
  return <TextSkeleton dummyText="Dummy text">{loadingText}</TextSkeleton>;
};
```

## License

MIT

Module built with the help of https://github.com/Techbinator/react-typescript-npm-boilerplate

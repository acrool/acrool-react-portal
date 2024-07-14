# Acrool React Portal

<p align="center">
    Throw React elements (ex: modal, dialog, toaster) to external using elements (usually used for
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-portal.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-portal)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-portal?style=for-the-badge)](https://github.com/acrool/@acrool/react-portal/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-portal?style=for-the-badge)](https://github.com/acrool/react-portal/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-portal.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-portal)
[![npm](https://img.shields.io/npm/dt/@acrool/react-portal.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-portal)

</div>




## Features

- Pass the component to the external Dom through the portal
- Use framer-motion to achieve the function of inserting and removing components with animation

## Install

```bash
yarn add @acrool/react-portal
```

## Usage

add in your App.tsx

```tsx
import ReactPortal from '@acrool/react-portal';

const App = () => {
    return (
        <ReactPortal
            id={props.id || rootId}
            className={styles.root}
        >
            {item && renderDialog()}
        </ReactPortal>
    );
};
```


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-dialog/main/play-in-example-button.svg)](https://acrool-react-dialog.pages.dev)

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-toaster/main/play-in-example-button.svg)](https://acrool-react-toaster.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)

# Acrool React Portal

<a href="https://acrool-react-portal.pages.dev/" title="Acrool React Portal - This is a toast message function for React development notifications">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-portal/main/example/public/og.webp" alt="Acrool React Portal Logo"/>
</a>

<p align="center">
    This is a toast message function for React development notifications
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-portal.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-portal)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-portal?style=for-the-badge)](https://github.com/acrool/@acrool/react-portal/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-portal?style=for-the-badge)](https://github.com/acrool/react-portal/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-portal.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-portal)
[![npm](https://img.shields.io/npm/dt/@acrool/react-portal.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-portal)

</div>




## Features

- Supports 5 status colors: default, success, info, warning, danger
- Call via global method
- Configurable disappearance delay seconds

## Install

```bash
yarn add @acrool/react-portal
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-portal/dist/index.css";
```

add in your App.tsx

```tsx
import {PortalPortal} from "@acrool/react-portal";

const App = () => {
    return (
        <div>
            <BaseUsed/>
            <PortalPortal timeout={3000}/>
        </div>
    );
};
```

then in your page
```tsx
import {EStatus, toast} from '@acrool/react-portal';

const Example = () => {
    return (
        <div>
            <button type="button" onClick={() => toast({message: 'usePortal message'})}>
                usePortal message
            </button>
        </div>
    );
};
```

- toast
- toast.success
- toast.info
- toast.warning
- toast.danger


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-portal/main/play-in-example-button.svg)](https://acrool-react-portal.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)

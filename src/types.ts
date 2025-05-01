import * as CSS from 'csstype';
import React from 'react';

export interface IPortalProps{
    id: string
    className?: string
    style?: CSS.Properties
    children: React.ReactNode
    containerSelector?: () => HTMLElement|null
}

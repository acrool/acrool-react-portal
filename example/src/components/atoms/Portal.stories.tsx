import type {Meta, StoryObj} from '@storybook/react';
import ReactPortal from '@acrool/react-portal';

const meta = {
    title: 'Example/Portal',
    component: ReactPortal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ReactPortal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 'acrool-react-modal',
        containerSelector: () => document.getElementById('example-root'),
        children: <div>This is portal content</div>
    },
    render: (args) => {
        return (<>
            <div id="example-root"/>
            <ReactPortal {...args}/>
        </>
        );
    },
};

import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../../components/Atom/Alert/Alert';
declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export declare const AlertFloating: Story;
export declare const AlertSticky: Story;
export declare const CloseableAlert: Story;

import { Meta, StoryObj } from '@storybook/react';
import { Rating } from '../../components/Atom/Rating/Rating';
import { RatingProps } from '../../types/ratingExtends';
declare const meta: Meta<RatingProps>;
export default meta;
type Story = StoryObj<typeof Rating>;
export declare const CustomStar: Story;

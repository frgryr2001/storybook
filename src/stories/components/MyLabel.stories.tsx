import { Meta, StoryFn } from '@storybook/react';

import MyLabel from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    color: { control: { type: 'select' } },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof MyLabel>;

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'My Label',
  allCaps: false,
  color: 'primary',
};
export const AllCaps = Template.bind({});

AllCaps.args = {
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  size: 'normal',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  size: 'h2',
};

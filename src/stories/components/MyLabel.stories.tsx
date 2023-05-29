import { Meta, StoryFn } from '@storybook/react';

import MyLabel from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} satisfies Meta<typeof MyLabel>;

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'My Label',
  size: 'normal',
  backgroundColor: '#ff0000',
  color: '#ffffff',
};
export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});

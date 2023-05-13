import React from 'react';
import ChatBox from '../components/ChatBox';

export default {
  title: 'ChatBox',
  component: ChatBox,
};

const Template = (args) => <ChatBox {...args} />;

export const Default = Template.bind({});

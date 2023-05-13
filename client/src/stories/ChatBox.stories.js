import React from 'react';
import ChatBox from '../components/ChatBox';

export default {
  title: 'ChatBox',
  component: ChatBox,
    argTypes: {},
};

const Template = (args) => <ChatBox {...args} />;

export const Default = Template.bind({});

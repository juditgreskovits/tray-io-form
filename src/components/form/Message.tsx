import React from 'react';

interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => <p>{message}</p>;

export default Message;

import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.p`
  font-size: 1.6rem;
`;

interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => <StyledMessage>{message}</StyledMessage>;

export default Message;

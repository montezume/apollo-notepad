import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  color: red;
  display: flex;
  width: 100%;
`;

const Avatar = styled.span`
  height: 30px;
  width: 30px;
  margin-right: 12px;
  border-radius: 50%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  
  position: relative;
  
  &:before {
    content: '${props => props.letter}';
    font-size: 18px;
    color: black;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Item = ({item, ...props}) => {
  console.log(item.author.name[0]);
  return (
    <StyledItem {...props}>
      <Avatar letter={item.author.name[0]} />
      <Content>
        {item.content}
      </Content>
    </StyledItem>
  );
};

export default Item;

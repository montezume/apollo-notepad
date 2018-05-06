import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { deleteNote, getNotes } from '../../../graphql/notes';

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
  return (
    <Mutation
      mutation={deleteNote}
      update={(cache, { data: { deleteNote } }) => {
        const { allNotes } = cache.readQuery({ query: getNotes });
        cache.writeQuery({
          query: getNotes,
          data: { allNotes: allNotes.filter(post => post.id !== deleteNote.id) }
        });
      }}
      >
      {deleteNote => (
        <StyledItem {...props}>
          <Avatar letter={item.author.name[0]} />
          <Content>
            {item.content}
          </Content>
          <button type="button" onClick={() => {
            deleteNote({
              variables: {
                id: item.id
              }
            });
          }}>Delete</button>
        </StyledItem>
      )}
    </Mutation>
  );
};

export default Item;

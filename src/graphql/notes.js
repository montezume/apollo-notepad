import gql from "graphql-tag";

export const deleteNote = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`;

export const getNotes = gql`
  query {
    allNotes {
      id
      content,
      createdAt,
      author {
        id, name
      }
    }
  }
`;

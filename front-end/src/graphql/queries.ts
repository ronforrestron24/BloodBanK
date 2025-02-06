import { gql } from '@apollo/client';

export const GET_ALL_BLOOD = gql`
  query GetAllBlood {
    getAll {
      id
      name
      quantity
      bloodType
    }
  }
`;

export const CREATE_BLOOD = gql`
  mutation CreateBlood($name: String!, $quantity: Float!, $bloodType: String!) {
    createBlood(name: $name, quantity: $quantity, bloodType: $bloodType) {
      id
      name
      quantity
      bloodType
    }
  }
`;

export const USE_BLOOD = gql`
  mutation UseBlood($id: String!) {
    useBlood(id: $id) {
      id
      quantity
    }
  }
`;

export const DELETE_BLOOD = gql`
  mutation DeleteBlood($id: String!) {
    deleteBlood(id: $id) {
      id
    }
  }
`;

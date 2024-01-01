"use client";
import { DocumentNode, gql } from "@apollo/client";

export const LOGIN_USER: DocumentNode = gql`
  mutation LoginUser($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      user {
        id
        name
        email
        password
      }
      accessToken
      refreshToken
      error {
        message
      }
    }
  }
`;

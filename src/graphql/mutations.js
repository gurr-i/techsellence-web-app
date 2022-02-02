/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserTable = /* GraphQL */ `
  mutation CreateUserTable(
    $input: CreateUserTableInput!
    $condition: ModelUserTableConditionInput
  ) {
    createUserTable(input: $input, condition: $condition) {
      id
      user_Name
      user_email
      user_comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserTable = /* GraphQL */ `
  mutation UpdateUserTable(
    $input: UpdateUserTableInput!
    $condition: ModelUserTableConditionInput
  ) {
    updateUserTable(input: $input, condition: $condition) {
      id
      user_Name
      user_email
      user_comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserTable = /* GraphQL */ `
  mutation DeleteUserTable(
    $input: DeleteUserTableInput!
    $condition: ModelUserTableConditionInput
  ) {
    deleteUserTable(input: $input, condition: $condition) {
      id
      user_Name
      user_email
      user_comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

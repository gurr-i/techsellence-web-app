/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserTable = /* GraphQL */ `
  query GetUserTable($id: ID!) {
    getUserTable(id: $id) {
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
export const listUserTables = /* GraphQL */ `
  query ListUserTables(
    $filter: ModelUserTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserTables = /* GraphQL */ `
  query SyncUserTables(
    $filter: ModelUserTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

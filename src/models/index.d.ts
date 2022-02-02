import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserTable {
  readonly id: string;
  readonly user_Name?: string;
  readonly user_email?: string;
  readonly user_comment?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserTable, UserTableMetaData>);
  static copyOf(source: UserTable, mutator: (draft: MutableModel<UserTable, UserTableMetaData>) => MutableModel<UserTable, UserTableMetaData> | void): UserTable;
}
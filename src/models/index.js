// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserTable } = initSchema(schema);

export {
  UserTable
};
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: "Query";
  contacts?: Maybe<Array<Maybe<Contact>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  addContact: Contact;
  deleteContact?: Maybe<Contact>;
  updateContact?: Maybe<Contact>;
};

export type MutationAddContactArgs = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type MutationDeleteContactArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateContactArgs = {
  id: Scalars["ID"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type Contact = {
  __typename?: "Contact";
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type AddContactMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
}>;

export type AddContactMutation = { __typename?: "Mutation" } & {
  addContact: { __typename?: "Contact" } & Pick<
    Contact,
    "id" | "firstName" | "lastName" | "email" | "phone"
  >;
};

export type ContactsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type ContactsQueryQuery = { __typename?: "Query" } & {
  contacts?: Maybe<
    Array<
      Maybe<
        { __typename?: "Contact" } & Pick<
          Contact,
          "id" | "email" | "firstName" | "lastName" | "phone"
        >
      >
    >
  >;
};

export const AddContactDocument = gql`
  mutation addContact(
    $firstName: String!
    $lastName: String!
    $phone: String
    $email: String
  ) {
    addContact(
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      email: $email
    ) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;

/**
 * __useAddContactMutation__
 *
 * To run a mutation, you first call `useAddContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContactMutation, { data, loading, error }] = useAddContactMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      phone: // value for 'phone'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddContactMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddContactMutation,
    AddContactMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddContactMutation,
    AddContactMutationVariables
  >(AddContactDocument, baseOptions);
}
export type AddContactMutationHookResult = ReturnType<
  typeof useAddContactMutation
>;
export type AddContactMutationResult = ApolloReactCommon.MutationResult<
  AddContactMutation
>;
export const ContactsQueryDocument = gql`
  query contactsQuery {
    contacts {
      id
      email
      firstName
      lastName
      phone
    }
  }
`;

/**
 * __useContactsQueryQuery__
 *
 * To run a query within a React component, call `useContactsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactsQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ContactsQueryQuery,
    ContactsQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ContactsQueryQuery,
    ContactsQueryQueryVariables
  >(ContactsQueryDocument, baseOptions);
}
export function useContactsQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ContactsQueryQuery,
    ContactsQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ContactsQueryQuery,
    ContactsQueryQueryVariables
  >(ContactsQueryDocument, baseOptions);
}
export type ContactsQueryQueryHookResult = ReturnType<
  typeof useContactsQueryQuery
>;
export type ContactsQueryLazyQueryHookResult = ReturnType<
  typeof useContactsQueryLazyQuery
>;
export type ContactsQueryQueryResult = ApolloReactCommon.QueryResult<
  ContactsQueryQuery,
  ContactsQueryQueryVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [],
  },
};
export default result;

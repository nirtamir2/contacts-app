const { ApolloServer, gql } = require("apollo-server");
let contacts = require("./data");

const fakeApiDelay = () => Math.random() * 250 + 250;

const typeDefs = gql`
  type Query {
    contacts: [Contact]
  }
  type Mutation {
    addContact(
      firstName: String!
      lastName: String!
      phone: String
      email: String
    ): Contact!
    deleteContact(id: ID!): Contact
    updateContact(
      id: ID!
      firstName: String
      lastName: String
      phone: String
      email: String
    ): Contact
  }
  type Contact {
    id: ID!
    firstName: String!
    lastName: String!
    phone: String
    email: String
  }
`;

const resolvers = {
  Query: {
    contacts: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(contacts), fakeApiDelay());
      }),
  },
  Mutation: {
    addContact: (parent, args) => {
      const id = `${contacts.length + 1}`;
      const contact = {
        id,
        ...args,
      };
      contacts.push(contact);
      return new Promise((resolve) => {
        setTimeout(() => resolve(contact), fakeApiDelay());
      });
    },
    deleteContact: (parents, args) => {
      const contact = contacts.find(({ id }) => id === args.id);

      if (!contact) {
        return null;
      }

      contacts = contacts.filter(({ id }) => id !== args.id);

      return new Promise((resolve) => {
        setTimeout(() => resolve(contact), fakeApiDelay());
      });
    },
    updateContact: (parents, args) => {
      const index = contacts.findIndex(({ id }) => id === args.id);

      if (index === -1) {
        return null;
      }

      contacts[index] = { ...contacts[index], ...args };

      return new Promise((resolve) => {
        setTimeout(() => resolve(contacts[index]), fakeApiDelay());
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({
    port: 4520,
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });

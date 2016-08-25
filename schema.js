import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {
  getDog,
  getDogOwner,
  getHuman,
  getOwnedDogs,
  getParty,
  getPartyAttendees,
} from './data';

const dogType = new GraphQLObjectType({
  name: `Dog`,
  description: `A dog.`,
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: `The dog's id.`
    },
    name: {
      type: GraphQLString,
      description: `The dogs's name.`,
    },
    owner: {
      type: humanType,
      description: `The human who owns the dog.`,
      resolve: (dog) => getDogOwner(dog.id),
    },
  })
});

const humanType = new GraphQLObjectType({
  name: `Human`,
  description: `A human user in our wonderful application.`,
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: `The user's id.`
    },
    firstName: {
      type: GraphQLString,
      description: `The user's first name.`,
    },
    lastName: {
      type: GraphQLString,
      description: `The user's last name.`,
    },
    dogs: {
      type: new GraphQLList(dogType),
      description: `Dogs the human owns.`,
      resolve: (human) => getOwnedDogs(human.ownedDogs),
    },
  })
});

const partyType = new GraphQLObjectType({
  name: `Party`,
  description: `A party.`,
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: `The party's id.`
    },
    title: {
      type: GraphQLString,
      description: `The title of the party.`,
    },
    description: {
      type: GraphQLString,
      description: `The description of the party.`,
    },
    attendees: {
      type: new GraphQLList(dogType),
      description: `Dogs that attend the party.`,
      resolve: (party) => getPartyAttendees(party.id),
    },
  })
});

const queryType = new GraphQLObjectType({
  name: `Query`,
  fields: {
    dog: {
      type: dogType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (_, args) => getDog(args.id),
    },
    human: {
      type: humanType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (_, args) => getHuman(args.id),
    },
    party: {
      type: partyType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (_, args) => getParty(args.id),
    },
  },
});

const Schema = new GraphQLSchema({
  query: queryType,
});

export {
  Schema
};

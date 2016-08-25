const dogs = [
  {
    id: 1,
    name: 'Fido',
    breed: 'Shih Tzu',
    ownerId: 3,
  },
  {
    id: 2,
    name: 'Lassie',
    breed: 'Collie',
    ownerId: 1,
  },
  {
    id: 3,
    name: 'Fluffy',
    breed: 'Pitbull',
    ownerId: 1,
  },
  {
    id: 4,
    name: 'Deeojee',
    breed: 'Pomeranian',
    ownerId: 2,
  },
  {
    id: 5,
    name: 'Rin Tin Tin',
    breed: 'German Shepherd',
    ownerId: 3,
  },
]

const humans = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Costas',
    phoneNumber: '555-843-1842',
    ownedDogs: [2, 3],
  },
  {
    id: 2,
    firstName: 'Alice',
    lastName: 'Cooper',
    phoneNumber: '555-230-3877',
    ownedDogs: [4],
  },
  {
    id: 3,
    firstName: 'Tina',
    lastName: 'Turner',
    phoneNumber: '555-884-1784',
    ownedDogs: [1, 5],
  },
]

const parties = [
  {
    id: 1,
    title: 'Barkfest 2k16',
    description: `No humans, no rules! Prizes for loudest and highest-pitched barks.`,
    attendees: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Super Trash Fun Time',
    description: `Tear up all the bags of garbage you want at the must-attend dog event of the year.`,
    attendees: [2, 3, 4, 5],
  },
]

const getDog = (dogId) => {
  return dogs[dogId - 1]
};

const getDogOwner = (dogId) => {
  const ownerId = getDog(dogId).ownerId;
  return getHuman(ownerId);
};

const getHuman = (humanId) => {
  return humans[humanId - 1]
};

const getOwnedDogs = (ownerId) => {
  const dogIds = humans[ownerId].ownedDogs;
  const results = [];
  dogIds.forEach((id) => results.push(getDogOwner(id)))
  return results;
};

const getParty = (partyId) => {
  return parties[partyId - 1]
};

const getPartyAttendees = (partyId) => {
  const dogIds = getParty(partyId).attendees;
  const results = [];
  dogIds.forEach((id) => results.push(getDog(id)))
  return results;
};

export {
  dogs,
  getDog,
  getDogOwner,
  getHuman,
  getOwnedDogs,
  getParty,
  getPartyAttendees,
  humans,
  parties,
};

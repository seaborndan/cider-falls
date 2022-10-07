const database = {
  areas: [
    {
      id: 1,
      name: "Chamfort River",
      supports: "rafting, canoeing, and fishing"
    },
    {
      id: 2,
      name: "Lost Wolf Hiking Trail",
      supports: "hiking, picnicking, and rock climbing"
    },
    {
      id: 3,
      name: "Lodge",
      supports: "lodging, parking, information, and picnicking"
    },
    {
      id: 4,
      name: "Gander River",
      supports: "fishing and hiking"
    },
    {
      id: 5,
      name: "Campgrounds",
      supports: "information, lodging, and parking"
    },
    {
      id: 6,
      name: "Pine Bluffs Trails",
      supports: "hiking, picnicking, and zip lines"
    }
  ],
  guests: [
    {
      id: 1,
      name: "Peter Parker",
      visitingID: 5
    },
    {
      id: 2,
      name: "Bruce Wayne",
      visitingID: 5
    },
    {
      id: 3,
      name: "Seaborn Mercer",
      visitingID: 1
    },
    {
      id: 4,
      name: "Joe Mama",
      visitingID: 2
    },
    {
      id: 5,
      name: "Hugh Jass",
      visitingID: 3
    },
    {
      id: 6,
      name: "Hugh Janus",
      visitingID: 4
    },
  ]
}

export const getAreas = () => {
  return database.areas.map((area) => ({...area}));
}

export const getGuests = () => {
  return database.guests.map((guest) => ({...guest}));
}
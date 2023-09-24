function ThreadFiller(): Thread[] {
  return [{
    id: 0,
    name: "Rules",
    last_message: {
      content: "--- Here are the Rules ---",
      meta: {
        author: {
          name: "Admin",
        },
        posted: "1 year ago",
        edited: "Few days ago",
      }
    }
  }, {
    id: 2,
    name: "Very cool thread!",
    last_message: {
      content: "This is so kwel!",
      meta: {
        author: {
          name: "CoolDude42",
        },
        posted: "Today",
      }
    }
  }, {
    id: 21,
    name: "Cozy thread!",
    last_message: {
      content: "How cozy :)",
      meta: {
        author: {
          name: "KittenLover7",
        },
        posted: "Yesterday",
      }
    }
  }];
}

export { ThreadFiller };
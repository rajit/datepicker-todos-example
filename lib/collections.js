Lists = new Mongo.Collection('lists');

// Calculate a default name for a list in the form of 'List A'
Lists.defaultName = function() {
  var nextLetter = 'A', nextName = 'List ' + nextLetter;
  while (Lists.findOne({name: nextName})) {
    // not going to be too smart here, can go past Z
    nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
    nextName = 'List ' + nextLetter;
  }

  return nextName;
};

Todos = new Mongo.Collection('todos');

var Schemas = {};
Schemas.Todos = new SimpleSchema({
  listId: {
    type: String
  },
  text: {
    type: String
  },
  checked: {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  notAvailableDates: {
    type: String,
    optional: true,
    autoform: {
      type: 'bootstrap-datepicker'
    }
  }
});

Todos.attachSchema(Schemas.Todos);

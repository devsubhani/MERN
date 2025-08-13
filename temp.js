db.createCollection("books", {
  validator: {
    $jsonSchema: {
      required: ["title", "author", "published", "price"],
      properties: {
        title: { bsonType: "string", description: "must be a string and is required" },
        author: { bsonType: "string", description: "must be a string and is required" },
        published: { bsonType: "date", description: "must be a date and is required" },
        price: { bsonType: "number", description: "must be a number and is required" },
      },
    },
  },
  validationAction: "error",
});

db.runCommand({
  collMod: "books",
  validator: {
    $jsonSchema: {
      required: ["title", "author", "published", "price"],
    },
  },
  validationAction: "error",
});

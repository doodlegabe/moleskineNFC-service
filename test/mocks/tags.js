const tagList = [
  {
    id: 1,
    uri: "https://curt.li/HjydZYyNl3Y",
    uuid: "23814d78-bc95-4ffc-9cb7-a052d2363bd0",
    notebookId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    uri: "https://curt.li/XSpZ64kpjjw",
    uuid: "46f4e232-c37a-4a12-a307-87d5ac589dfc",
    notebookId: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    uri: "https://curt.li/SLfkfzYOgcM",
    uuid: "fe62b1c2-4304-42eb-9d3d-a86c43bf301c",
    notebookId: 3,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 4,
    uri: "https://curt.li/Z1U4RuLkJSE",
    uuid: "4390b5ce-8da0-4f1e-8d9f-d8b0cab12d02",
    notebookId: 4,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 5,
    uri: "https://curt.li/wW7bdbohy3Q",
    uuid: "23814d78-bc95-4ffc-9cb7-a052d2363bd0",
    notebookId: 5,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 6,
    uri: "https://curt.li/UNTXiuxlkc4",
    uuid: "ef9557c1-9f97-4172-a298-f815c5885c3a",
    notebookId: 6,
    updatedAt: new Date(),
    createdAt: new Date()
  }
];

exports.createTag = function(){
  return tagList[0]
};

exports.listTags = function(){
  return { tags: tagList }
};

exports.retrieveTag = function(){
  return tagList[1]
};

exports.updateTag = function(){
  let example = tagList[2];
  example.uri = "https://curt.li/Z1U4RuLkJSE";
  example.updatedAt = new Date();
  return example
};
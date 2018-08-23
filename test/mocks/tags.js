// Tag 1 is on USB-C adapter, Tag 2 is on Smart Lined, Tag 3 is on Smart Dotted, Tag 4 is on squared

const tagList = [
  {
    id: 1,
    uri: "https://curt.li/HjydZYyNl3Y",
    uuid: "",
    notebookId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    uri: "https://curt.li/XSpZ64kpjjw",
    uuid: "",
    notebookId: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    uri: "https://curt.li/SLfkfzYOgcM",
    uuid: "",
    notebookId: 3,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 4,
    uri: "https://curt.li/Z1U4RuLkJSE",
    uuid: "",
    notebookId: 3,
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
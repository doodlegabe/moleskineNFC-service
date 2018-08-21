const tagList = [
  {
    id: 1,
    uri: "https://curt.li/123456",
    uuid: "JSDF22-DJFLDF-F324LF-F234DS-ADK224",
    notebookId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    uri: "https://curt.li/123457",
    uuid: "JSDF22-DJFLDF-F324LF-F234DS-ADK225",
    notebookId: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    uri: "https://curt.li/123458",
    uuid: "JSDF22-DJFLDF-F324LF-F234DS-ADK226",
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
  example.uri = "12345-1234-1234-12345";
  example.updatedAt = new Date();
  return example
};
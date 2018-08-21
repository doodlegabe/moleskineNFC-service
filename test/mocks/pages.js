const pageList = [
  {
    id: 1,
    notebookId: 1,
    number: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    notebookId: 1,
    number: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    notebookId: 2,
    number: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  }
];

exports.createPage = function(){
  return pageList[0]
};

exports.listPages = function(){
  return { pages: pageList }
};

exports.retrievePage = function(){
  return pageList[1]
};

exports.updatePage = function(){
  let example = pageList[2];
  example.number = 5;
  example.updatedAt = new Date();
  return example
};
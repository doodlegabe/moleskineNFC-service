const pageList = [
  {
    id: 1,
    notebookId: 2,
    number: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    notebookId: 2,
    number: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    notebookId: 3,
    number: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 4,
    notebookId: 3,
    number: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 5,
    notebookId: 1,
    number: 4,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 6,
    notebookId: 4,
    number: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 7,
    notebookId: 1,
    number: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 8,
    notebookId: 1,
    number: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 9,
    notebookId: 5,
    number: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 10,
    notebookId: 5,
    number: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 11,
    notebookId: 5,
    number: 3,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 12,
    notebookId: 6,
    number: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 13,
    notebookId: 6,
    number: 2,
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
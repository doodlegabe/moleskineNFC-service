const notebookList = [
  {
    id: 1,
    title: "John's first notebook",
    userId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    title: "John's second notebook",
    userId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    title: "My diary",
    userId: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  }
];

const insideNotebook = {
  notebookId: 1,
  notebookTitle: "My Project journal",
  notebookUpdatedAt: new Date(),
  notebookCreatedAt: new Date(),
  owner:{
    firstName: "Wanda",
    lastName: "Doe",
    email:"wanda@doe.com",
    updatedAt: new Date(),
    createdAt: new Date()
  },
  pages:[
    {
      number: 1,
      updatedAt: new Date(),
      createdAt: new Date(),
      pageItems: [
        {
          image:"https://mymoleskine.moleskine.com/community/wp-content/uploads/2018/06/IMG_20180611_100155_091.jpg",
          body: "Basilica di Sant’antonio da Padova, Italy",
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ]
    }
  ]
};

exports.createNotebook = function(){
  return notebookList[0]
};

exports.listNotebooks = function(){
  return { notebooks: notebookList }
};

exports.retrieveNotebook = function(){
  return notebookList[1]
};

exports.updateNotebook = function(){
  let example = notebookList[2];
  example.title = "My secret diary";
  example.updatedAt = new Date();
  return example
};

exports.whatIsInsideNotebook = function(){
  return insideNotebook;
};
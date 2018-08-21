const pageItemList = [
  {
    id: 1,
    body: "testing body",
    image: "http://www.placekitten.io/100/100",
    pageId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    body: "testing body 2",
    image: "http://www.placekitten.io/100/100",
    pageId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    body: "testing body 3",
    image: "http://www.placekitten.io/100/100",
    pageId: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  }
];

exports.createPageItem = function(){
  return pageItemList[0]
};

exports.listPageItems = function(){
  return { pageItems: pageItemList }
};

exports.retrievePageItem = function(){
  return pageItemList[1]
};

exports.updatePageItem = function(){
  let example = pageItemList[2];
  example.body = "Lorem ipsum";
  example.updatedAt = new Date();
  return example
};
const pageItemList = [
  {
    id: 1,
    body: "ABCDEFGHIJKLMNOP",
    image: null,
    pageId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    body: null,
    image: "http://images.clipartpanda.com/smiley-face-png-440932-e-denim-jeans-icon-symbols-shapes-smiley-happy.png",
    pageId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    body: "\nWhen do we know\nOk now what",
    image: null,
    pageId: 1,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 4,
    body: "\nThey just need a prototype of a paper page\njust the plug-in next week",
    image: "",
    pageId: 2,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 5,
    body: "These are the first words I will write to myself",
    image: null,
    pageId: 3,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 6,
    body: null,
    image: "http://getdrawings.com/image/creepy-eyeball-drawing-51.jpg",
    pageId: 3,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 7,
    body: "Internet of Creativity",
    image: null,
    pageId: 3,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 8,
    body: "Ways to measure creativity",
    image: null,
    pageId: 4,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 9,
    body: "Imitation\nVariation\nCombination\nTransformation\nOriginal Creation",
    image: null,
    pageId: 4,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 10,
    body: null,
    image: "https://www.easy-drawings-and-sketches.com/images/draw-a-mouse07.jpg",
    pageId: 5,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 11,
    body: "Colors\n * Eyes\n * Nose\n * Base",
    image: null,
    pageId: 5,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 12,
    body: "Basic Gameflow:",
    image: null,
    pageId: 6,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 13,
    body: "1. Measure psychoforce\n 2. Adjust Broadcasting\n 3. Place Broadcasters",
    image: null,
    pageId: 6,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 14,
    body: "4. Pickup Recruits\n 5. Create Outposts",
    image: null,
    pageId: 6,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 15,
    body: "6. Develop Outposts\n 7. Survive Raids",
    image: null,
    pageId: 6,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 16,
    body: "This is test content from the USB-C Adapter",
    image: null,
    pageId: 7,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 16,
    body: "They were lost without the crookback yak that composed their titanium",
    image: null,
    pageId: 7,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 18,
    body: "Authors often misinterpret the hall as an unbarred purple, when in actuality it feels more like a salty van.",
    image: null,
    pageId: 8,
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 19,
    body: null,
    image: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2549101/300/200/m1/fpnw/wm0/skull-daa6-03_preview-.jpg?1492266846&s=07e469e43b61fa16179830097917da36",
    pageId: 8,
    updatedAt: new Date(),
    createdAt: new Date()
  },
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
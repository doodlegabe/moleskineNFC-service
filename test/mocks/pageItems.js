const pageItemList = [
  {
    id: 1,
    body: 'ABCDEFGHIJKLMNOP',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 1
  },
  {
    id: 2,
    body: '',
    image: 'http://images.clipartpanda.com/smiley-face-png-440932-e-denim-jeans-icon-symbols-shapes-smiley-happy.png',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 1
  },
  {
    id: 3,
    body: '\nWhen do we know\nOk now what',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 1
  },
  {
    id: 4,
    body: '\nThey just need a prototype of a paper page\njust the plug-in next week',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 2
  },
  {
    id: 5,
    body: 'These are the first words I will write to myself',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 3
  },
  {
    id: 6,
    body: '',
    image: 'http://getdrawings.com/image/creepy-eyeball-drawing-51.jpg',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 3
  },
  {
    id: 7,
    body: 'Internet of Creativity',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 3
  },
  {
    id: 8,
    body: 'Ways to measure creativity',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 4
  },
  {
    id: 9,
    body: 'Imitation\nVariation\nCombination\nTransformation\nOriginal Creation',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 4
  },
  {
    id: 10,
    body: '',
    image: 'https://www.easy-drawings-and-sketches.com/images/draw-a-mouse07.jpg',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 5
  },
  {
    id: 11,
    body: 'Colors\n * Eyes\n * Nose\n * Base',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 5
  },
  {
    id: 12,
    body: 'Basic Gameflow:',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 6
  },
  {
    id: 13,
    body: '1. Measure psychoforce\n 2. Adjust Broadcasting\n 3. Place Broadcasters',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 6
  },
  {
    id: 14,
    body: '4. Pickup Recruits\n 5. Create Outposts',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 6
  },
  {
    id: 15,
    body: '6. Develop Outposts\n 7. Survive Raids',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 6
  },
  {
    id: 16,
    body: 'This is test content from the USB-C Adapter',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 7
  },
  {
    id: 17,
    body: 'They were lost without the crookback yak that composed their titanium',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 7
  },
  {
    id: 18,
    body: 'Authors often misinterpret the hall as an unbarred purple, when in actuality it feels more like a salty van.',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 8
  },
  {
    id: 19,
    body: '',
    image: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2549101/300/200/m1/fpnw/wm0/skull-daa6-03_preview-.jpg?1492266846&s=07e469e43b61fa16179830097917da36',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 8
  },
  {
    id: 20,
    body: 'Sluge En Kamel',
    image: 'https://mymoleskine.moleskine.com/community/wp-content/uploads/2018/06/IMG_20180606_203432_582.jpg',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 9
  },
  {
    id: 21,
    body: 'All Mysteries are just needles in the camel\'s eye',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 9
  },
  {
    id: 22,
    body: 'Reading List',
    image: 'https://www.chroniclebooks.com/media/catalog/product/cache/1/large_image/9df78eab33525d08d6e5fb8d27136e95/9/7/9781452169361.jpg',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 10
  },
  {
    id: 23,
    body: 'Reminder: Book Meeting with LV',
    image: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 11
  },
  {
    id: 24,
    body: 'Idea 1',
    image: 'https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54caaca0bf9aa_-_rid_patents_03_0810-lg.jpg',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 12
  },
  {
    id: 25,
    body: 'Idea 2',
    image: 'http://www.funnypatent.com/uploads/1/1/6/0/1160056/3552046.jpg',
    updatedAt: new Date(),
    createdAt: new Date(),
    pageId: 13
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
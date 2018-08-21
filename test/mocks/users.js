const userList = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john@doe.com",
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    email: "jane@doe.com",
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    id: 3,
    first_name: "Jules",
    last_name: "Doe",
    email: "jules@doe.com",
    updatedAt: new Date(),
    createdAt: new Date()
  }
];

exports.createUser = function(){
  return userList[0]
};

exports.listUsers = function(){
  return { users: userList }
};

exports.retrieveUser = function(){
  return userList[1]
};

exports.updateUser = function(){
  let example = userList[2];
  example.first_name = "Wanda";
  example.updatedAt = new Date();
  return example
};
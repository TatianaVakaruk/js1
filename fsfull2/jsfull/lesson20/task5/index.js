
export class User {
  // put your code here
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get name() {
    return this._name;
  }
  get id(){
    return this._id;
  }
  get sessionId() {
    return this._sessionId;
  }
}
export class UserRepository {
  // put your code here
  constructor(users) {
    this._users = users;
  }
  get users() {
    Object.freeze(this._users);
    return this._users;
  }
  getUserNames() {
   return this._users.map(el=>el.name);
     
  }
  getUserIds() {
   return this._users.map(el=>el.id);
     
  }
  getUserNameById(id) {
    const user = this._users.find(user => user.id === id);
    return user ? user.name : null;
}
}

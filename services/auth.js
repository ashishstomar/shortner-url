const sessionUserMap = new Map();

function setUser(id, user) {
  sessionUserMap.set(id, user);
}

function getUser(id) {
  return sessionUserMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};

const categories = [
  {
    _id: "1",
    title: "Cuidado Personal"
  },
  {
    _id: "2",
    title: "Infantil 2"
  },
  {
    _id: "3",
    title: "Adulto"
  }
]

module.exports = {
  Query: {
    getCategories() {
      return categories;
    },
    getCategory(_, { _id }) {
      return categories.find(category => category._id === _id);
    },
  }
}
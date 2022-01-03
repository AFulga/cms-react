const getMongoUri = () => {
  const user = 'AFulga';
  const pass = 'mhn3104MGB';
  const url = 'cluster0.jgvi3.mongodb.net/app?retryWrites=true&w=majority';
  return `mongodb+srv://${user}:${pass}@${url}`;
};

export { getMongoUri };

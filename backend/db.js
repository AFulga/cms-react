const MongoClient = require('mongodb').MongoClient;
const getBdUri = () => {
  const user = encodeURIComponent(process.env.mongoUser);
  const pass = encodeURIComponent(process.env.mongoPass);
  const url = encodeURIComponent(process.env.mongoUrl);

  return `mongodb+srv://${user}:${pass}@${url}`;
};
const uri = getBdUri();
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.client = client;
client
  .connect()
  .then(() => console.log('mongo DB connected'))
  .then(() => {
    const posts = client.db('app').collection('posts');
    module.exports.posts = posts;
  })
  .catch((error) =>
    console.error('Error on connecting to MongoDB server', error)
  );

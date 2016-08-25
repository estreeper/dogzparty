import Express from 'express';
import GraphHTTP from 'express-graphql';
import { Schema } from './schema';

const PORT = 3333;

const app = new Express();

app.use('/graphql', new GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

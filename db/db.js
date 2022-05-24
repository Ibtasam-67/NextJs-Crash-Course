import { MongoClient } from "mongodb";

export default   function mongoClient() {
  const client =  MongoClient.connect(process.env.KEY);
}

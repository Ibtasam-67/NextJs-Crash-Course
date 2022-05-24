import MeetupList from "../components/meetups/meetupList/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  // fetch data fromm an api
  const client = await MongoClient.connect(
    "mongodb+srv://ibtasam:ibtasam12345@cluster0.cy1a4.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ibtasam:ibtasam12345@cluster0.cy1a4.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://ibtasam:ibtasam12345@cluster0.cy1a4.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image:selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
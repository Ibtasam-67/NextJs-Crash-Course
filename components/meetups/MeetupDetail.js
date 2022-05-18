import classes from "./MeetupDetail.module.css";
import Image from "next/image";

function MeetupDetail(props) {
  console.log(props.image);
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        alt={props.title}
        layout="responsive"
        width={"0px"}
        height={"0px"}
      />

      <h1> {props.title}</h1>
      <address>{props.address}</address>
      <p> {props.description}</p>
    </section>
  );
}

export default MeetupDetail;

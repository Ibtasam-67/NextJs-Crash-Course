import classes from "./MeetupDetail.module.css";
import Image from "next/image";

function MeetupDetail({image,title,address,description}) {
 
  return (
    <section className={classes.detail}>
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={"0px"}
        height={"0px"}
      />
      <h1> {title}</h1>
      <address>{address}</address>
      <p> {description}</p>
    </section>
  );
}

export default MeetupDetail;

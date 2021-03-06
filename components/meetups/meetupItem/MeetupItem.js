import Card from "../../../common/card/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <Image
            src={props.image}
            alt={props.title}
            layout="responsive"
            width={"0px"}
            height={"0px"}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

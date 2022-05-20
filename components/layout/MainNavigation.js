import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <div className={classes.header}>
      <a className={classes.logo}>React Meetups</a>
      <div className={classes.right}>
        <Link href="/" className={classes.active}>
          All Meetups
        </Link>
        <Link href="/new-meetup">Add New Meetup</Link>
      </div>
    </div>
  );
}

export default MainNavigation;

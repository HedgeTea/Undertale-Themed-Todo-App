import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import "./styles.css";
import heart from "../assets/heart.png";

type drill = {
  adder: (e: SyntheticEvent) => void;
  setter: Dispatch<SetStateAction<string>>;
  task: string;
};

export default function Form(props: drill) {
  return (
    <div>
      <form className="inputForm" action="" onSubmit={props.adder}>
        <input className="inputBox" type="text" value={props.task} onChange={(e) => props.setter(e.target.value)} />
        <div className="submitWrapper">
          <input className="submitBox" type="submit" value="ACT" />
          <img className="heart" src={heart.src} alt="" />
        </div>
      </form>
    </div>
  );
}

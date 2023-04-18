import "./message.scss";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://img.freepik.com/free-icon/boy_318-157514.jpg?t=st=1681637120~exp=1681637720~hmac=67d2a8bfb880a265e93d03b859f6168964ddc28e411d04e244192aef92bd9e13"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}

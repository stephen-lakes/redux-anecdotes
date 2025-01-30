import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    borderColor: notification.type === "success" ? "green" : "",
    display: notification.message !== "" ? "block" : "none",
  };
  return <div style={style}>{notification.message}</div>;
};

export default Notification;

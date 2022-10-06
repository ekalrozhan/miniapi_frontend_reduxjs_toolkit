import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { remove } from "../redux/userSlice";

const Navbar = () => {
  const name = useSelector((state) => state.user.userInfo.name);
  const email = useSelector((state) => state.user.userInfo.email);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("click");
    // dispatch(remove());
  };
  return (
    <div className="navbar">
      <div className="brand">
        <h1>HAKA</h1>
      </div>
      <div className="account">
        <span>{name} </span>
        <span>{email} </span>
        <span onClick={handleDelete}>Delete</span>
      </div>
    </div>
  );
};

export default Navbar;

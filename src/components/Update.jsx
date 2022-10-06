import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/userSlice";
import { updateUser } from "../redux/apiCall";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({name, email}, dispatch)
  };



  return (
    <div className="update">
      <div className="form_container">
        <form action="">
          <label htmlFor="name">Name: </label>
          <div>
            <input
              type="text"
              placeholder={user.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="email">Email: </label>
          <div>
            <input
              type="text"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="email">Password: </label>
          <div>
            <input type="password" placeholder="password" />
          </div>
          <button type="submit" className="btnUpdate" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;

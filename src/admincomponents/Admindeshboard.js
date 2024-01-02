import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDeshboard = () => {
  let [user, setUser] = useState([]);
  let [categories, setCategories] = useState([]);

  let userHendler = () => {
    axios
      .get("https://thankful-yoke-colt.cyclic.app/alluser")
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let userDeleteHendler = (id) => {
    axios
      .delete(`https://thankful-yoke-colt.cyclic.app/userdelete?id=${id}`)
      .then((res) => {
        console.log(res);
        userHendler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let categoriesHendler = () => {
    axios
      .get("https://thankful-yoke-colt.cyclic.app/alldata", {
        headers: { token: localStorage.getItem("adminToken") },
      })
      .then((res) => {
        console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let categoriesDeleteHendler = (id) => {
    axios
      .delete(`https://thankful-yoke-colt.cyclic.app/deletedata?id=${id}`)
      .then((res) => {
        categoriesHendler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   userHendler();
  //   categoriesHendler();
  // }, []);

  return (
    <div>
      <button onClick={userHendler}>userdata</button>
      <button onClick={categoriesHendler}>categorydata</button>

      <table border={1} width="50%">
        <tr>
          <th>username</th>
          <th>password</th>
        </tr>
        {user.map((el) => {
          return (
            <tr>
              <td>{el.username}</td>
              <td>{el.password}</td>
              <td>
                <button onClick={() => userDeleteHendler(el._id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      <table border={1} width="50%">
        <tr>
          <th>name</th>
          <th>image</th>
        </tr>
        {categories.map((el) => {
          return (
            <tr>
              <td>{el.name}</td>
              <td>
                <img
                  src={"https://thankful-yoke-colt.cyclic.app/images/" + el.image}
                  width={50}
                />
              </td>
              <td>
                <button onClick={() => categoriesDeleteHendler(el._id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default AdminDeshboard;

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { shoppingNewsletterRef } from "../firebase"
import { weeklyNewsletterRef } from "../firebase"

function AdminPage () {
  const [shoppingNewsletter, setShoppingNewsletter] = useState([]);
  const [weeklyNewsletter, setWeeklyNewsletter] = useState([]);
  const [activeButton, setActiveButton] = useState("shopping");

  useEffect(() => {
    const getShoppingNewsletter = async () => {
      const data = await getDocs(shoppingNewsletterRef);
      setShoppingNewsletter(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getShoppingNewsletter();
  }, []);

  useEffect(() => {
    const getWeeklyNewsletter = async () => {
      const data = await getDocs(weeklyNewsletterRef);
      setWeeklyNewsletter(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getWeeklyNewsletter();
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
    <hr />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <button onClick={() => handleButtonClick("shopping")} className="adminbutton" >Shopping Newsletter</button>
        <button onClick={() => handleButtonClick("weekly")} className="adminbutton" >Weekly Newsletter</button>
      </div>
      {activeButton === "shopping" && (
        <div>
          Shopping Newsletter Subscribers: 
          <div className="adminbutton">{shoppingNewsletter.length}</div>
          <hr />
          {shoppingNewsletter.length > 0 &&
            shoppingNewsletter.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <div className="userinfo">
                    <div>Name: {user.firstname} {user.lastname}</div> 
                    <div>Email: {user.email}</div>
                    </div>
                  </p>
                </div>
              );
            })}
        </div>
      )}
      {activeButton === "weekly" && (
        <div>
          Weekly Newsletter Subscribers: 
          <div className="adminbutton">{weeklyNewsletter.length}</div>
          <hr />
          {weeklyNewsletter.length > 0 &&
            weeklyNewsletter.map((user) => {
              return (
                <div key={user.id}>
                 <p>
                 <div className="userinfo">
                    <div>Name: {user.firstname} {user.lastname}</div> 
                    <div>Email: {user.email}</div>
                </div>
                </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default AdminPage

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { shoppingNewsletterRef } from "../firebase"
import { weeklyNewsletterRef } from "../firebase"

function AdminPage () {
  const [shoppingNewsletter, setShoppingNewsletter] = useState([]);
  const [weeklyNewsletter, setWeeklyNewsletter] = useState([]);


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

return (
    <div className='App'>
    <div>
        Shopping NewsLetter Subscriber:
        {shoppingNewsletter.length > 0 &&
          shoppingNewsletter.map((user) => {
            return (
              <div key={user.id}>
                <h4>
                  Name: {user.firstname} {user.lastname} Email: {user.email}
                </h4>
              </div>
            );
          })}
      </div>
      <div>
        Weekly Newsletter Subscriber:
        {weeklyNewsletter.length > 0 &&
          weeklyNewsletter.map((user) => {
            return (
              <div key={user.id}>
                <h4>
                  Name: {user.firstname} {user.lastname} Email: {user.email}
                </h4>
              </div>
            );
          })}
      </div>
      </div>
)
}

export default AdminPage
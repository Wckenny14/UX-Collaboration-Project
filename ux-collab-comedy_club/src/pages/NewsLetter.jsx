import "reactjs-popup/dist/index.css";
import Subform from '../components/Subform'
import "../App.css";
import { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function Newsletter() {
  const [error, setError] = useState(null);
  const [newFisrtName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [shoppingNewsletter, setShoppingNewsletter] = useState([]);
  const shoppingNewsletterRef = collection(db, "shoppingNewsletter");
  const [weeklyNewsletter, setWeeklyNewsletter] = useState([]);
  const weeklyNewsletterRef = collection(db, "weeklyNewsletter");

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

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First name",
      errorMessage: "Must contain at least two letters.",
      label: "First name",
      pattern: "^[A-Za-z]{2,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last name",
      errorMessage: "Must contain at least two letters",
      label: "Last name",
      pattern: "^[A-Za-z]{2,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email address",
      errorMessage: "It should be a valid email address!",
      label: "Email address",
      pattern: "^[^@]+@[^@]+.[^@]+$",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shoppingNewsletter && !weeklyNewsletter) {
      setError("Please select at least one newsletter");
      return;
    }

    try {
      if (shoppingNewsletter) {
        await addDoc(shoppingNewsletterRef, {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
        });
      }

      if (weeklyNewsletter) {
        await addDoc(weeklyNewsletterRef, {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
        });
      }

      // clear form values
      setValues({
        firstname: "",
        lastname: "",
        email: "",
      });
      setShoppingNewsletter([]);
      setWeeklyNewsletter([]);

      setError(null);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="newsletter">
      <div className="formBackground">
      <div className="logo N">
            <a href="/"><img className='logo' src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0595%2F0580%2F3426%2Ffiles%2FThe-Running-Joke_1_1200x1200.png%3Fv%3D1631522041" /></a>
      </div>
      <h1 className='newsletterTitle'>Our Newsletter</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex items-center justify-center mb-8">
          {inputs.map((input) => (
            <Subform
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <p className='newsletterChoice'>I would like to receive: </p>
          <div className="tickbox1">
            <div>
              <input
                type="checkbox"
                id="shopping-newsletter"
                name="shopping-newsletter"
                checked={shoppingNewsletter}
                onChange={() => setShoppingNewsletter(!shoppingNewsletter)}
              />
            </div>
            <div className="shopNewsDetails">
              <label htmlFor="shopping-newsletter"  className='shopNews'>
                Shopping Newsletter
              </label>
              <div className="shopNewsText">
                Get discounted tickets, lineups, and exclusive comedy clips
                from The Running Jokes.
              </div>
            </div>
          </div>

          <div className="tickbox2">
            <div>
              <input
                type="checkbox"
                id="weekly-newsletter"
                name="weekly-newsletter"
                checked={weeklyNewsletter}
                onChange={() => setWeeklyNewsletter(!weeklyNewsletter)}
              />
            </div>
            <div className="shopNewsDetails">
                <label htmlFor="weekly-newsletter" className='shopNews'>
                  Weekly Newsletter
                </label>
                <div className="shopNewsText">
                  Our signature newsletter, this comprehensive rundown of
                  what’s going on in the world of Australian comedy will
                  arrive in your inbox on the first day of the working week.
                </div>
            </div>
          </div>
          <div>
            {error && <div className="text-red-500">{error}</div>}
            <Link className='saveBtn2' to="/confirmation">
              <button className="subscribeBtn edit">
                <p className='saveBtn'>Save subscribtion</p>
              </button>
            </Link>
            <div className='privacy'>
              <div className='privacyTitle'>Your privacy </div>
              <p className="privacyText">Your email address is totally safe with us. We will never
              pass it on to a third party or use it for anything other than
              sending you the emails you’ve requested. All the emails we
              send contain an option to permanently unsubscribe.
              </p>            
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Newsletter;


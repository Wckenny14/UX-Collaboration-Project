import "./App.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import NavLinks from "./NavBar/NavLinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Subform from "./components/Subform";
import { useState } from "react";
import { Modal } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import Newsletter from './pages/NewsLetter';

function App() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const [shoppingNewsletter, setShoppingNewsletter] = useState(false);
  const [weeklyNewsletter, setWeeklyNewsletter] = useState(false);

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
      pattern: "^[^s@]+@[^s@]+.[^s@]+$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!shoppingNewsletter && !weeklyNewsletter) {
    //   alert("Please select at least one newsletter to subscribe.");
    //   return;
    // }
    if (!shoppingNewsletter && !weeklyNewsletter) {
      setError("Please select at least one newsletter");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h4>Popup - GeeksforGeeks</h4>
      <Popup trigger={<button> Click to open popup </button>} modal nested>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center justify-center mb-8">
                <img
                  className="w-24 h-24 rounded-full mr-4"
                  src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0595%2F0580%2F3426%2Ffiles%2FThe-Running-Joke_1_1200x1200.png%3Fv%3D1631522041"
                  alt=""
                  width="70"
                  height="70"
                />
                {inputs.map((input) => (
                  <Subform
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <p>I would like to receive: </p>
                <div className="tickbox1">
                  <input
                    type="checkbox"
                    id="shopping-newsletter"
                    name="shopping-newsletter"
                    checked={shoppingNewsletter}
                    onChange={() => setShoppingNewsletter(!shoppingNewsletter)}
                  />
                  <label htmlFor="shopping-newsletter">
                    Shopping Newsletter
                  </label>
                  <div>
                    Get discounted tickets, lineups, and exclusive comedy clips
                    from The Running Jokes.
                  </div>
                </div>

                <div className="tickbox2">
                  <input
                    type="checkbox"
                    id="weekly-newsletter"
                    name="weekly-newsletter"
                    checked={weeklyNewsletter}
                    onChange={() => setWeeklyNewsletter(!weeklyNewsletter)}
                  />
                  <label htmlFor="weekly-newsletter">Weekly Newsletter</label>
                  <div>
                    Our signature newsletter, this comprehensive rundown of
                    what’s going on in the world of Australian comedy will
                    arrive in your inbox on the first day of the working week.
                  </div>
                </div>
                <div>
                  {error && <div className="text-red-500">{error}</div>}
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save subscribtion
                  </button>
                  <div>
                    <div>Your privacy </div>
                    Your email address is totally safe with us We will never
                    pass it on to a third party or use it for anything but
                    sending you the emails you’ve requested. All the emails we
                    send contain to permanently unsubscribe.
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
}
export default App;

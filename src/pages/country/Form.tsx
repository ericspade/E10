import classes from './countrystyles/form.module.css';
import { EnterField } from './EnterField/EnterField';
import axios from "axios";
import { useState } from "react";
import ReactDOM from "react-dom";
import { memo } from "react"

export const _Form = memo(function _Form(props = {}) {

  const [data, addData] = useState({
    client_name: "",
    email: "",
    phone: "",
    contact_method: "",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    let bookingDate = {
      client_name: data.client_name,
      email: data.email,
      phone: data.phone,
      contact_method: data.contact_method,
    };

    const config = {
    };

    axios
      .post("/api/feedback/", bookingDate, config)
      .then((response) => {
        addData(
          {
            client_name: "",
            email: "",
            phone: "",
            contact_method: "",
          },
        );
        return response.data;
      })
      .then((response) => {
        document.getElementById("common-message")!.innerHTML = `${response["response"]}`;
        setTimeout(function () {
          document.getElementById("common-message")!.innerHTML = "";
        }, 3000);
      })
      .catch((error) => {
      });
    };

  return (
    <div>
      <div className={classes.rectangle273}></div>
      <form className="booking-form mt-5" onSubmit={handleSubmit}>
      <div className={classes.yourName}>Your name
      <input
        className="form-control"
        type="text"
        name="customer_name"
        value={data.client_name}
        onChange={(event) => addData({ ...data, client_name: event.target.value })}
        required={true}
      />
      </div>
      <div className={classes.yourEMail}>Your e-mail<input
        className="form-control"
        type="text"
        name="email"
        value={data.email}
        onChange={(event) => addData({ ...data, email: event.target.value })}
        required={true}
      />
      </div>
      <div className={classes.yourPhoneNumber}>Your phone number<input
        className="form-control"
        type="text"
        name="phone"
        value={data.phone}
        onChange={(event) => addData({ ...data, phone: event.target.value })}
        required={true}
      />
      </div>
      <div className={classes.preferredMethodOfContact}>Preferred method of contact<input
      className="form-control"
      type="text"
      name="contact_method"
      value={data.contact_method}
      onChange={(event) => addData({ ...data, contact_method: event.target.value })}
      required={true}
      />
      </div>
      <button className={classes.buttonSubmit}>
        <div className={classes.airplane1}></div>
      </button>
      <button className={classes.buttonSubmit2}>
        <div className={classes.send}>send</div>
      </button>
      </form>
      </div>
  )
})
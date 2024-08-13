import "./countrystyles/Form2.css";
import classes from './countrystyles/form.module.css';
import { memo } from "react"
import { EnterField } from './EnterField/EnterField';
import axios from "axios";
import { useState } from "react";
import ReactDOM from "react-dom";

export interface IFormProps {
  className?: string;
}

export const Form2 = ({ className, ...props }: IFormProps): JSX.Element => {

  const [data, addData] = useState({
    client_firstname: "",
    client_lastname: "",
    email: "",
    phone: "",
    comments: "",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    let bookingDate = {
      client_firstname: data.client_firstname,
      client_lastname: data.client_lastname,
      email: data.email,
      phone: data.phone,
      comments: data.comments,
    };

    const config = {
    };

    axios
      .post("/api/feedback/", bookingDate, config)
      .then((response) => {
        addData(
          {
            client_firstname: "",
    client_lastname: "",
    email: "",
    phone: "",
    comments: "",
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
    <div className={classes.rectangle273}>
    <form className="booking-form mt-5" onSubmit={handleSubmit}>
    <div className={"form " + className}>
      <div className="name-section">
        <div className="rectangle-96"></div>
        <label>
        <div className="name">Name
        <input
        className="form-control"
        type="text"
        name="client_firstname"
        defaultValue="Name"
        value={data.client_firstname}
        onChange={(event) => addData({ ...data, client_firstname: event.target.value })}
        required={true}
        />
        </div>
        </label>
      </div>
      <div className="surname-section">
        <div className="rectangle-97"></div>
        <label>
        <div className="surname">Surname
        <input
        className="form-control"
        type="text"
        name="client_lastname"
        defaultValue="Name"
        value={data.client_lastname}
        onChange={(event) => addData({ ...data, client_lastname: event.target.value })}
        required={true}
        />
        </div>
        </label>
      </div>
      <div className="phone-number-section">
        <div className="rectangle-98"></div>
        <label>
        <div className="phone-number">Phone number
        <input
        className="form-control"
        type="text"
        name="phone"
        value={data.phone}
        onChange={(event) => addData({ ...data, phone: event.target.value })}
        required={true}
        />
        </div>
        </label>
      </div>
      <div className="email-address-section">
        <div className="rectangle-99"></div>
        <label>
        <div className="e-mail-adress">E-mail address
        <input
        className="form-control"
        type="text"
        name="email"
        value={data.email}
        onChange={(event) => addData({ ...data, email: event.target.value })}
        required={true}
        />
        </div>
        </label>
      </div>
      <div className="leave-a-comment-section">
        <div className="rectangle-982"></div>
        <label>
        <div className="leave-a-comment">Leave a Comment
        <input
        className="form-control"
        type="text"
        name="contact_method"
        value={data.comments}
        onChange={(event) => addData({ ...data, comments: event.target.value })}
        required={true}
        />
        </div>
        </label>
      </div>
      <div className="button">
        <button className="button-section">
          <div className="rectangle-94"></div>
          <div className="let-s-travel">Let’s travel </div>
        </button>
        <button className="button-logo-section">
          <div className="rectangle-95"></div>
          <img className="_004-airplane" src="_004-airplane0.png" />
        </button>
      </div>
    </div>
    </form>
    </div>
  );
};

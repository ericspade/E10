import classes from './styles/form.module.css';
import { EnterField } from './EnterField/EnterField';

export default function Form() {
  return (
    <div>
      <div className={classes.rectangle273}></div>
      <div className={classes.yourName}>Your name</div>
      <EnterField
        className={classes.enterField}
        text={{
          yourFullNameRequired: <div className={classes.yourFullNameRequired}>Name / Surname</div>,
        }}
      />
      <div className={classes.yourEMail}>Your e-mail</div>
      <EnterField
        className={classes.enterField2}
        text={{
          yourFullNameRequired: <div className={classes.yourFullNameRequired2}> ilovefirstclass@</div>,
        }}
      />
      <div className={classes.yourPhoneNumber}>Your phone number</div>
      <EnterField
        className={classes.enterField3}
        text={{
          yourFullNameRequired: <div className={classes.yourFullNameRequired3}>+66 99 160 97 11</div>,
        }}
      />
      <div className={classes.preferredMethodOfContact}>Preferred method of contact</div>
      <EnterField
        className={classes.enterField4}
        text={{
          yourFullNameRequired: (
            <div className={classes.yourFullNameRequired4}>
              We&#39;re flexible and want to ensure we communicate in a way that suits you best
            </div>
          ),
        }}
      />
      <button className={classes.buttonSubmit}>
        <div className={classes.airplane1}></div>
      </button>
      <button className={classes.buttonSubmit2}>
        <div className={classes.send}>send</div>
      </button>
      </div>
  )
}
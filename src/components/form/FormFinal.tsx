import styles from "./formfinal.module.css";
import { memo } from "react"
import { EnterField } from './EnterField/EnterField';
import axios from "axios";
import { useState, useEffect } from "react";
import UploadService from "./FileUploadService";
import IFile from "./FileAttach";
import ReactDOM from "react-dom";
import API from "./API";

export interface IComponentProps {
  className?: string;
}

export const FormF = ({
  className,
  ...props
}: IComponentProps): JSX.Element => {


const [data, setData] = useState({
    client_name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    country: "",
    attach: "",
    comments: "",
    });

const [errors, setErrors] = useState({
    client_name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    country: "",
    attach: "",
    comments: "",
    });


const handleChange = ({ currentTarget: input }) => {
        let newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
    };

    const handleImageChange = (event) => {
        let newData = { ...data };
        newData["attach"] = event.target.files[0];
        setData(newData);
    };

    const doSubmit = async (event) => {
        event.preventDefault();
        const response = await API.createListing(data);
        if (response.status === 400) {
            setErrors(response.data);
        }
    };


  return (
    <div className={styles.div + " " + className}>
      <div
        className={
          styles.dearLadiesGentlemensWelcomeToAWorldOfBespokeTravelWhereYourDreamsBecomeOurMission
        }
      >
        <span>
          <span
            className={
              styles.dearLadiesGentlemensWelcomeToAWorldOfBespokeTravelWhereYourDreamsBecomeOurMissionSpan
            }
          >
            Dear Ladies &amp;
          </span>
          <span
            className={
              styles.dearLadiesGentlemensWelcomeToAWorldOfBespokeTravelWhereYourDreamsBecomeOurMissionSpan2
            }
          >
            Gentlemens, Welcome to a world of bespoke travel, where your dreams
            become our mission
          </span>
        </span>{" "}
      </div>
      <form className="booking-form mt-5" enctype="multipart/form-data" onSubmit={(event) => doSubmit(event)}>
      <div className={styles.nameSurname}>
        <div className={styles.name}>Name &amp; Surname</div>
        <div className={styles.horizontalBorder}>
        <input
        className="form-control"
        type="text"
        name="client_name"
        value={data.client_name}
        onChange={(e) => {
                            handleChange(e);}}
        required={true}
        />
        </div>
      </div>
      <div className={styles.companyName}>
        <div className={styles.companyName2}>Company name </div>
        <div className={styles.horizontalBorder2}>
        <input
        className="form-control"
        type="text"
        name="company"
        value={data.company}
        onChange={(e) => {
                            handleChange(e);}}
        required={true}
        />
        </div>
      </div>
      <div className={styles.phoneNumber}>
        <div className={styles.phoneNumber2}>Phone number </div>
        <div className={styles.horizontalBorder3}>
        <input
        className="form-control"
        type="text"
        name="phone"
        value={data.phone}
        onChange={(e) => {
                            handleChange(e);}}
        required={true}
        />
        </div>
      </div>
      <div className={styles.emailAddress}>
        <div className={styles.eMail}>E-mail Address </div>
        <div className={styles.horizontalBorder4}>
        <input
        className="form-control"
        type="text"
        name="email"
        value={data.email}
        onChange={(e) => {
                            handleChange(e);}}
        required={true}
        />
        </div>
      </div>
      <div className={styles.chooseService}>
        <div className={styles.chooseService2}>Choose service </div>
        <div className={styles.horizontalBorder5}>
        <select
        className="form-control"
        name="service"
        value={data.service}
        onChange={(e) => {
                            handleChange(e);}}
        required={true}
        >
  <option value="Service 1">Service 1</option>
  <option value="Service 2">Service 2</option>
  <option value="Service 3">Service 3</option>
  <option value="Service 4">Service 4</option>
  <option value="Service 5">Service 5</option>
        </select>
        </div>
      </div>
      <div className={styles.chooseCountry}>
        <div className={styles.chooseCountry2}>Choose Country </div>
        <div className={styles.horizontalBorder6}>
        <select
        className="form-control"
        name="country"
        value={data.country}
        onChange={(e) => {
                            handleChange(e);}}
        required={true}
        >
  <option value="Afghanistan">Afghanistan</option>
  <option value="Albania">Albania</option>
  <option value="Algeria">Algeria</option>
  <option value="American Samoa">American Samoa</option>
  <option value="Andorra">Andorra</option>
  <option value="Angola">Angola</option>
  <option value="Anguilla">Anguilla</option>
  <option value="Antarctica">Antarctica</option>
  <option value="Antigua And Barbuda">Antigua And Barbuda</option>
  <option value="Argentina">Argentina</option>
  <option value="Armenia">Armenia</option>
  <option value="Aruba">Aruba</option>
  <option value="Australia">Australia</option>
  <option value="Austria">Austria</option>
  <option value="Azerbaijan">Azerbaijan</option>
  <option value="Bahamas">Bahamas</option>
  <option value="Bahrain">Bahrain</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Barbados">Barbados</option>
  <option value="Belarus">Belarus</option>
  <option value="Belgium">Belgium</option>
  <option value="Belize">Belize</option>
  <option value="Benin">Benin</option>
  <option value="Bermuda">Bermuda</option>
  <option value="Bhutan">Bhutan</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Bosnia And Herzegovina">Bosnia And Herzegovina</option>
  <option value="Botswana">Botswana</option>
  <option value="Bouvet Island">Bouvet Island</option>
  <option value="Brazil">Brazil</option>
  <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
  <option value="Brunei Darussalam">Brunei Darussalam</option>
  <option value="Bulgaria">Bulgaria</option>
  <option value="Burkina Faso">Burkina Faso</option>
  <option value="Burundi">Burundi</option>
  <option value="Cambodia">Cambodia</option>
  <option value="Cameroon">Cameroon</option>
  <option value="Canada">Canada</option>
  <option value="Cape Verde">Cape Verde</option>
  <option value="Cayman Islands">Cayman Islands</option>
  <option value="Central African Republic">Central African Republic</option>
  <option value="Chad">Chad</option>
  <option value="Chile">Chile</option>
  <option value="China">China</option>
  <option value="Christmas Island">Christmas Island</option>
  <option value="Cocos (keeling) Islands">Cocos (keeling) Islands</option>
  <option value="Colombia">Colombia</option>
  <option value="Comoros">Comoros</option>
  <option value="Congo">Congo</option>
  <option value="Congo, The Democratic Republic Of The">Congo, The Democratic Republic Of The</option>
  <option value="Cook Islands">Cook Islands</option>
  <option value="Costa Rica">Costa Rica</option>
  <option value="Cote D'ivoire">Cote D'ivoire</option>
  <option value="Croatia">Croatia</option>
  <option value="Cuba">Cuba</option>
  <option value="Cyprus">Cyprus</option>
  <option value="Czech Republic">Czech Republic</option>
  <option value="Denmark">Denmark</option>
  <option value="Djibouti">Djibouti</option>
  <option value="Dominica">Dominica</option>
  <option value="Dominican Republic">Dominican Republic</option>
  <option value="East Timor">East Timor</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Egypt">Egypt</option>
  <option value="El Salvador">El Salvador</option>
  <option value="Equatorial Guinea">Equatorial Guinea</option>
  <option value="Eritrea">Eritrea</option>
  <option value="Estonia">Estonia</option>
  <option value="Ethiopia">Ethiopia</option>
  <option value="Falkland Islands (malvinas)">Falkland Islands (malvinas)</option>
  <option value="Faroe Islands">Faroe Islands</option>
  <option value="Fiji">Fiji</option>
  <option value="Finland">Finland</option>
  <option value="France">France</option>
  <option value="French Guiana">French Guiana</option>
  <option value="French Polynesia">French Polynesia</option>
  <option value="French Southern Territories">French Southern Territories</option>
  <option value="Gabon">Gabon</option>
  <option value="Gambia">Gambia</option>
  <option value="Georgia">Georgia</option>
  <option value="Germany">Germany</option>
  <option value="Ghana">Ghana</option>
  <option value="Gibraltar">Gibraltar</option>
  <option value="Greece">Greece</option>
  <option value="Greenland">Greenland</option>
  <option value="Grenada">Grenada</option>
  <option value="Guadeloupe">Guadeloupe</option>
  <option value="Guam">Guam</option>
  <option value="Guatemala">Guatemala</option>
  <option value="Guinea">Guinea</option>
  <option value="Guinea-bissau">Guinea-bissau</option>
  <option value="Guyana">Guyana</option>
  <option value="Haiti">Haiti</option>
  <option value="Heard Island And Mcdonald Islands">Heard Island And Mcdonald Islands</option>
  <option value="Holy See (vatican City State)">Holy See (vatican City State)</option>
  <option value="Honduras">Honduras</option>
  <option value="Hong Kong">Hong Kong</option>
  <option value="Hungary">Hungary</option>
  <option value="Iceland">Iceland</option>
  <option value="India">India</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Iran, Islamic Republic Of">Iran, Islamic Republic Of</option>
  <option value="Iraq">Iraq</option>
  <option value="Ireland">Ireland</option>
  <option value="Israel">Israel</option>
  <option value="Italy">Italy</option>
  <option value="Jamaica">Jamaica</option>
  <option value="Japan">Japan</option>
  <option value="Jordan">Jordan</option>
  <option value="Kazakstan">Kazakstan</option>
  <option value="Kenya">Kenya</option>
  <option value="Kiribati">Kiribati</option>
  <option value="Korea, Democratic People's Republic Of">Korea, Democratic People's Republic Of</option>
  <option value="Korea, Republic Of">Korea, Republic Of</option>
  <option value="Kosovo">Kosovo</option>
  <option value="Kuwait">Kuwait</option>
  <option value="Kyrgyzstan">Kyrgyzstan</option>
  <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
  <option value="Latvia">Latvia</option>
  <option value="Lebanon">Lebanon</option>
  <option value="Lesotho">Lesotho</option>
  <option value="Liberia">Liberia</option>
  <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
  <option value="Liechtenstein">Liechtenstein</option>
  <option value="Lithuania">Lithuania</option>
  <option value="Luxembourg">Luxembourg</option>
  <option value="Macau">Macau</option>
  <option value="Macedonia, The Former Yugoslav Republic Of">Macedonia, The Former Yugoslav Republic Of</option>
  <option value="Madagascar">Madagascar</option>
  <option value="Malawi">Malawi</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Maldives">Maldives</option>
  <option value="Mali">Mali</option>
  <option value="Malta">Malta</option>
  <option value="Marshall Islands">Marshall Islands</option>
  <option value="Martinique">Martinique</option>
  <option value="Mauritania">Mauritania</option>
  <option value="Mauritius">Mauritius</option>
  <option value="Mayotte">Mayotte</option>
  <option value="Mexico">Mexico</option>
  <option value="Micronesia, Federated States Of">Micronesia, Federated States Of</option>
  <option value="Moldova, Republic Of">Moldova, Republic Of</option>
  <option value="Monaco">Monaco</option>
  <option value="Mongolia">Mongolia</option>
  <option value="Montserrat">Montserrat</option>
  <option value="Montenegro">Montenegro</option>
  <option value="Morocco">Morocco</option>
  <option value="Mozambique">Mozambique</option>
  <option value="Myanmar">Myanmar</option>
  <option value="Namibia">Namibia</option>
  <option value="Nauru">Nauru</option>
  <option value="Nepal">Nepal</option>
  <option value="Netherlands">Netherlands</option>
  <option value="Netherlands Antilles">Netherlands Antilles</option>
  <option value="New Caledonia">New Caledonia</option>
  <option value="New Zealand">New Zealand</option>
  <option value="Nicaragua">Nicaragua</option>
  <option value="Niger">Niger</option>
  <option value="Nigeria">Nigeria</option>
  <option value="Niue">Niue</option>
  <option value="Norfolk Island">Norfolk Island</option>
  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
  <option value="Norway">Norway</option>
  <option value="Oman">Oman</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Palau">Palau</option>
  <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
  <option value="Panama">Panama</option>
  <option value="Papua New Guinea">Papua New Guinea</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Philippines">Philippines</option>
  <option value="Pitcairn">Pitcairn</option>
  <option value="Poland">Poland</option>
  <option value="Portugal">Portugal</option>
  <option value="Puerto Rico">Puerto Rico</option>
  <option value="Qatar">Qatar</option>
  <option value="Reunion">Reunion</option>
  <option value="Russian Federation">Russian Federation</option>
  <option value="Rwanda">Rwanda</option>
  <option value="Saint Helena">Saint Helena</option>
  <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
  <option value="Saint Lucia">Saint Lucia</option>
  <option value="Saint Pierre And Miquelon">Saint Pierre And Miquelon</option>
  <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
  <option value="Samoa">Samoa</option>
  <option value="San Marino">San Marino</option>
  <option value="Sao Tome And Principe">Sao Tome And Principe</option>
  <option value="Saudi Arabia">Saudi Arabia</option>
  <option value="Senegal">Senegal</option>
  <option value="Serbia">Serbia</option>
  <option value="Seychelles">Seychelles</option>
  <option value="Sierra Leone">Sierra Leone</option>
  <option value="Singapore">Singapore</option>
  <option value="Slovakia">Slovakia</option>
  <option value="Slovenia">Slovenia</option>
  <option value="Solomon Islands">Solomon Islands</option>
  <option value="Somalia">Somalia</option>
  <option value="South Africa">South Africa</option>
  <option value="South Georgia And The South Sandwich Islands">South Georgia And The South Sandwich Islands</option>
  <option value="Spain">Spain</option>
  <option value="Sri Lanka">Sri Lanka</option>
  <option value="Sudan">Sudan</option>
  <option value="Suriname">Suriname</option>
  <option value="Svalbard And Jan Mayen">Svalbard And Jan Mayen</option>
  <option value="Swaziland">Swaziland</option>
  <option value="Sweden">Sweden</option>
  <option value="Switzerland">Switzerland</option>
  <option value="Syrian Arab Republic">Syrian Arab Republic</option>
  <option value="Taiwan, Province Of China">Taiwan, Province Of China</option>
  <option value="Tajikistan">Tajikistan</option>
  <option value="Tanzania, United Republic Of">Tanzania, United Republic Of</option>
  <option value="Thailand">Thailand</option>
  <option value="Togo">Togo</option>
  <option value="Tokelau">Tokelau</option>
  <option value="Tonga">Tonga</option>
  <option value="Trinidad And Tobago">Trinidad And Tobago</option>
  <option value="Tunisia">Tunisia</option>
  <option value="Turkey">Turkey</option>
  <option value="Turkmenistan">Turkmenistan</option>
  <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
  <option value="Tuvalu">Tuvalu</option>
  <option value="Uganda">Uganda</option>
  <option value="Ukraine">Ukraine</option>
  <option value="United Arab Emirates">United Arab Emirates</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="United States">United States</option>
  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Uzbekistan">Uzbekistan</option>
  <option value="Vanuatu">Vanuatu</option>
  <option value="Venezuela">Venezuela</option>
  <option value="Viet Nam">Viet Nam</option>
  <option value="Virgin Islands, British">Virgin Islands, British</option>
  <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
  <option value="Wallis And Futuna">Wallis And Futuna</option>
  <option value="Western Sahara">Western Sahara</option>
  <option value="Yemen">Yemen</option>
  <option value="Zambia">Zambia</option>
  <option value="Zimbabwe">Zimbabwe</option>
        </select>
        </div>
      </div>
      <div className={styles.attachItem}>
        <div
          className={styles.background}
          style={{
            background: "url(background0.png) center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={styles.attachItem2}>Attach Item</div>
        </div>
        <div className={styles.horizontalBorder7}>
        <input type="file" name="attach" onChange={(e) => {
                            handleImageChange(e);
                        }} />
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.taskDescription}>
          Kindly provide us with your important details to ensure we tailor your
          ideal journey{" "}
        </div>
        <div className={styles.horizontalBorder8}>
        <input
        className="form-control"
        type="text"
        name="comments"
        defaultValue="Comments"
        value={data.comments}
        onChange={(e) => {
                        handleChange(e);
                    }}
        required={false}
        />
        </div>
      </div>
      <div className={styles.policyPrivacy}>
        <div className={styles.imageBackgroundBorder}>
          <div className={styles.customCheckboxCheckmark589D534424SvgFill}>
          <input type="checkbox" name="agree" defaultChecked={false} required="required"/>
          </div>
        </div>
        <div className={styles.iAgreeWithThe}>I agree with the </div>
        <div className={styles.privacyPolicy}>privacy policy </div>
        <div className={styles.buttonSent}>
        <button>
        <div className={styles.letSJourney}>Let’s journey! </div>
        <img className={styles.airplane} src="airplane0.png" />
        </button>
      </div>
      </div>
      </form>
    </div>
  );
};

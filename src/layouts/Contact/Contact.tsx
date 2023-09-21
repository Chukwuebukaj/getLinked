import { Link } from "react-router-dom";
import { socialMediaIcons } from "../Footer/FooterData";
import { ContactProps, contactDetails, placeHolders } from "./ContactData";
import { InputField, TextArea } from "../../components/FormFields";
import {
  ContactWrapper,
  ContactLeft,
  ContactForm,
  Icons,
} from "./Contact.styled";
import Button from "../../components/Button";
import axios from "axios";
import { useState } from "react";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<ContactProps>({
    first_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContactInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const submitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post(
      `${baseUrl}/hackathon/contact-form`,
      contactInfo
    );
    if (response.status === 201) {
      setContactInfo({
        first_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    }
    console.log(response);
  };

  console.log(contactInfo);

  return (
    <ContactWrapper>
      <ContactLeft>
        <span className="line1">Get in touch</span>
        <p className="line2">{contactDetails.contactInfo}</p>
        <p className="line3">{contactDetails.address}</p>
        <p className="line4">{contactDetails.phone}</p>
        <p className="line5">{contactDetails.availability}</p>
        <span className="share">Share on</span>
        <Icons>
          {socialMediaIcons.map((icon, index) => (
            <Link key={index} to={icon.url}>
              {icon.icon}
            </Link>
          ))}
        </Icons>
      </ContactLeft>
      <ContactForm onSubmit={submitContactForm}>
        <span>Questions or need assistance?</span>
        <span>Let us know about it!</span>
        {placeHolders.map((item, index) =>
          index === 3 ? (
            <TextArea
              placeholder={item.title}
              name={Object.keys(contactInfo)[index]}
              onChange={handleInputChange}
              title={item.prompt}
              value={contactInfo[Object.keys(contactInfo)[index]]}
              required
            />
          ) : (
            <InputField
              placeholder={item.title}
              name={Object.keys(contactInfo)[index]}
              value={contactInfo[Object.keys(contactInfo)[index]]}
              onChange={handleInputChange}
              title={item.prompt}
              type={index === 1 ? "email" : index === 2 ? "tel" : "text"}
              maxLength={index === 2 ? 11 : undefined}
              required
            />
          )
        )}
        <Button children="Submit" type="submit" />
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;

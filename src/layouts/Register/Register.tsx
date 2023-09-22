import {
  RegisterWrapper,
  RegisterLeft,
  RegisterForm,
  FormWrapper,
} from "./Register.styled";
import girl from "../../assets/1f6b6-2640.png";
import boy from "../../assets/image_processing20200511-10310-13mnlsx.png";
import { CategoryProps, formDetails, UserProps } from "./RegisterData";
import { InputField, Select } from "../../components/FormFields";
import Button from "../../components/Button";
import { BsCheckLg } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import Success from "../Success/Success";
import { toast } from "react-toastify";
import PurpleOverLay from "../../components/PurpleOverLay";
import {
  GreyStarSmall,
  PinkStarSmall,
  PurpleStarSmall,
  WhiteStarSmall,
} from "../../components/TinyImages";
import Modal from "../../components/Modal";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [userDetails, setUserDetails] = useState<UserProps>({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: 0,
    group_size: 0,
    privacy_poclicy_accepted: false,
  });
  const [successful, setSuccessful] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Register Now");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "category") {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: categories.find((category) => category.name === value)?.id || 0,
      }));
    } else
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: name === "group_size" ? Number(value) : value,
      }));
  };

  const handleChecked = () => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      privacy_poclicy_accepted: !userDetails.privacy_poclicy_accepted,
    }));
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}/hackathon/categories-list`);
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userDetails.privacy_poclicy_accepted) {
      toast.warn("kindly accept terms and conditions", {
        style: {
          marginTop: window.innerWidth <= 768 ? "74vh" : "32rem",
          width: window.innerWidth <= 768 ? "80vw" : "",
          marginLeft: "auto",
          backgroundColor: "#140D27",
          color: "#fff",
          border: "1px solid #D434FE",
          fontSize: window.innerWidth <= 768 ? "0.875rem" : "0.875rem",
          padding: "0",
        },
      });
      return;
    }
    try {
      const response = await axios.post(
        `${baseUrl}/hackathon/registration`,
        userDetails
      );
      response.status === 201 && setSuccessful(true);
    } catch (error: any) {
      console.error(error);
      error.response
        ? toast.error(error.response.data.email[0])
        : error.message
        ? toast.error(error.message)
        : toast.error("Something went wrong. Try again");
    }
  };

  useEffect(() => {
    getCategories();
    const handleResize = () => {
      // Check the screen width and set the button text accordingly
      if (window.innerWidth <= 768) {
        setButtonText("Submit");
      } else {
        setButtonText("Register Now");
      }
    };

    // Add a resize event listener to update the button text on window resize
    window.addEventListener("resize", handleResize);

    // Initial update when the component mounts
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {successful ? (
        <Modal>
          <Success />
        </Modal>
      ) : (
        <RegisterWrapper>
          <RegisterLeft></RegisterLeft>
          <RegisterForm onSubmit={handleFormSubmit}>
            <span className="reg">Register</span>
            <div className="be-part">
              <span className="part">Be part of this movement!</span>
              <div>
                <img src={girl} alt="girl" />
                <img src={boy} alt="boy" />
              </div>
            </div>
            <p className="create">CREATE YOUR ACCOUNT</p>
            <FormWrapper>
              {formDetails.map((detail, index) => (
                <label
                  key={index}
                  className={
                    index === 4 ? "category" : index === 5 ? "group-size" : ""
                  }
                >
                  <span>{detail.title}</span>
                  {index > 3 ? (
                    <Select
                      defaultValue={detail.placeHolder}
                      title={detail.placeHolder}
                      options={
                        index === 4
                          ? categories.map((item) => item.name)
                          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                      }
                      name={Object.keys(userDetails)[index]}
                      onChange={handleInputChange}
                      required
                    />
                  ) : (
                    <InputField
                      type={
                        index === 1 ? "tel" : index === 2 ? "email" : "text"
                      }
                      placeholder={detail.placeHolder}
                      title={detail.placeHolder}
                      name={Object.keys(userDetails)[index]}
                      onChange={handleInputChange}
                      maxLength={index === 1 ? 11 : undefined}
                      required
                    />
                  )}
                </label>
              ))}
              <p className="review">
                Please review your registration details before submitting
              </p>
              <div className="agree">
                {userDetails.privacy_poclicy_accepted ? (
                  <BsCheckLg onClick={handleChecked} />
                ) : (
                  <label onClick={handleChecked}></label>
                )}
                <p>
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
              <Button children={buttonText} type="submit" />
            </FormWrapper>
          </RegisterForm>
          <PurpleOverLay className={"overlay1"} />
          <PurpleOverLay className={"overlay2"} />
          <PinkStarSmall className={"pink"} />
          <GreyStarSmall className={"grey1"} />
          <GreyStarSmall className={"grey2"} />
          <PurpleStarSmall className={"purple"} />
          <WhiteStarSmall className={"white"} />
        </RegisterWrapper>
      )}
    </>
  );
};

export default Register;

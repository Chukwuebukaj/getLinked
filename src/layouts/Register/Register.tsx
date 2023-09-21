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
      toast.warn("👈🏻 kindly accept terms and conditions", {
        style: {
          marginTop: "32rem",
          backgroundColor: "#150E28",
          color: "#fff",
          border: "1px solid #D434FE",
          fontSize: "0.875rem",
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
        : toast.error(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {successful ? (
        <Success />
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
                <label key={index}>
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
              <Button children="Register Now" type="submit" />
            </FormWrapper>
          </RegisterForm>
        </RegisterWrapper>
      )}
    </>
  );
};

export default Register;

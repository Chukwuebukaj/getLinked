export const contactDetails: {
  contactInfo: string;
  address: string;
  phone: string;
  availability: string;
} = {
  contactInfo: "Contact Information",
  address: "27,Alara Street Yaba 100012 Lagos State",
  phone: "Call Us : 07067981819",
  availability: "we are open from Monday-Friday 08:00am - 05:00pm",
};

export const placeHolders: { title: string; prompt: string }[] = [
  { title: "First Name", prompt: "Enter your first name" },
  { title: "Email", prompt: "Enter your email address" },
  { title: "Phone Number", prompt: "Enter your phone number" },
  { title: "Message", prompt: "Enter your message" },
];

export interface ContactProps {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
  [key: string]: string;
}

export const formDetails: { title: string; placeHolder: string }[] = [
  { title: "Team’s Name", placeHolder: "Enter the name of your group" },
  { title: "Phone", placeHolder: "Enter your phone number" },
  { title: "Email", placeHolder: "Enter your email address" },
  { title: "Project Topic", placeHolder: "What is your group project topic" },
  { title: "Category", placeHolder: "Select your category" },
  { title: "Group Size", placeHolder: "Select" },
];

export interface UserProps {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
}

export interface CategoryProps {
  id: number;
  name: string;
}

import { ConfirmationForm } from "./components/formPage";

export const metadata = {
  title: "Internship Confirmation Form | I.M.S.",
};

const Form = () => {
  return (
    <main className="bg-white dark:bg-dark_1 h-screen">
      {/* <Navbar /> */}
      <ConfirmationForm />
    </main>
  );
};

export default Form;

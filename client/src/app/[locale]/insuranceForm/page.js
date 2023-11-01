import { InsuranceForm } from "./components/formPage";

export const metadata = {
  title: "Social Insurance Form | I.M.S.",
};

const Form = () => {
  return (
    <main className="bg-white dark:bg-dark_1 h-screen">
      <InsuranceForm />
    </main>
  );
};

export default Form;

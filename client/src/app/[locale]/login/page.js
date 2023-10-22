import LoginSection from "../login/components/loginSection";

export const metadata = {
  title: "Login | I.M.S.",
};
export default function Login() {
  return (
    <div className={" bg-white dark:bg-dark_2"}>
      <LoginSection />
    </div>
  );
}

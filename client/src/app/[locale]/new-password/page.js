import NewPassword from "./components/newPassword";

export const metadata = {
  title: "Change Password | I.M.S.",
};
export default function newPass() {
  return (
    <div className={" bg-white dark:bg-dark_2"}>
      <NewPassword />
    </div>
  );
}

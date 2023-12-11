import HomePage from "./components/homepage";

export const metadata = {
  title: "Home | I.M.S.",
};
export default function Home() {
  return (
    <main className={"bg-white dark:bg-dark_2"}>
      <HomePage />
    </main>
  );
}

import { StudentInfoDisplay } from "./components/studentInfoDisplay";

export const metadata = {
    title: "Students Information | I.M.S.",
  };
  export default function Home() {
    return (
      <main className={"bg-white dark:bg-dark_2"}>
            
            <StudentInfoDisplay />
      </main>
    );
  }
import { ReportSubmit } from "./components/reportSubmit";
import { Navbar } from "../globalComponents/Navbar";

const Report = () => {
    return (
      <main className="bg-white dark:bg-dark_1 h-screen">
        <Navbar />
        <ReportSubmit/>
      </main>
    );
  };
  
  export default Report;
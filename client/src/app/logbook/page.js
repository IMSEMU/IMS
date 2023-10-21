
import { LogbookPage } from "./components/logbookPage";

export const metadata = {
  title: 'Logbook | I.M.S.',
}
const Logbook = () => {
  return(
      <main className=" min-w-screen min-h-screen ">
         <LogbookPage />
      </main>
  )
}

export default Logbook;
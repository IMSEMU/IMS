
import { LogbookPage } from "./components/logbookPage";

export const metadata = {
  title: 'Logbook | I.M.S.',
}
const Logbook = () => {
  return(
      <main className="flex flex-nowrap min-w-screen">
      
         <LogbookPage />
         
      </main>
  )
}

export default Logbook;
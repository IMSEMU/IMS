import {AddLogData} from "@/app/logbook/components/addLogData";
import {Navbar} from "@/app/globalComponents/Navbar";

export const metadata = {
  title: 'Logbook | I.M.S.',
}
const Logbook = () => {
  return(
      <main>
          <Navbar />
          <div className={'bg-background_shade_2 w-[]'}>
              <AddLogData />

          </div>
      </main>
  )
}

export default Logbook;
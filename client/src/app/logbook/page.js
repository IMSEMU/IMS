import {AddLogData} from "@/app/logbook/components/addLogData";
import {Navbar} from "@/app/globalComponents/Navbar";
import { LogbookDisplay } from "./components/logbookDisplay";

export const metadata = {
  title: 'Logbook | I.M.S.',
}
const Logbook = () => {
  return(
      <main>
          <Navbar />
          <main className={'max-h-screen'}>
            

            <section className="p-2 bg-white dark:bg-dark_1 min-h-screen flex items-center justify-center">
                <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 max-w-[30rem] md:max-w-full w-[60rem] h-[32rem]">
                   
                   {/* LOgbook Add section */}
                    <div className="w-1/2">


                      <div className=" flex items-center h-full">
                        <AddLogData />
                      </div>
                    </div>

                    {/* Logbook Display section */}
                    <div className="w-1/2 bg-background_shade dark:bg-dark_3 rounded">
                       <LogbookDisplay />
                    </div>

                </div>
            </section>
        </main>
      </main>
  )
}

export default Logbook;
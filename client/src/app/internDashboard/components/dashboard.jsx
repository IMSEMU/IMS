export const Dashboard = () => {
  return(
      <main className={'m-4 grid grid-cols-1 gap-4 bg-white dark:bg-dark_2 '}>

          <div className={'text-sm md:text-md lg:text-lg xl:text-xl mx-2 font-semibold'}>
              <p>Welcome Joel</p>
          </div>

        {/*  fitst section */}

        <div className={'grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-4 mx-2'}>

            <div className={'md:bg-background_shade col-span-1 sm:col-span-2 lg:col-span-1 h-[12rem] sm:h-[16rem] rounded flex items-center'}>
                <div className={'bg-blue w-[20rem] mx-auto md:w-full min-h-[12rem] md:mx-5 rounded '}>
q
                </div>
            </div>

            <div className={'bg-background_shade col-span-1 sm:col-span-2 lg:col-span-1 h-[16rem] rounded'}>

            </div>

            <div className={'bg-background_shade col-span-1 sm:col-span-4 lg:col-span-1 h-[16rem] rounded'}>

            </div>

        </div>


      </main>
  )
}
import {HiMiniCalendarDays} from "react-icons/hi2";
import {PiClockCountdown} from "react-icons/pi";

export const Dashboard = () => {
  return(
      <main className={'m-5 grid grid-cols-1 gap-4 bg-white dark:bg-dark_2 '}>

          <div className={'text-md lg:text-lg xl:text-xl mx-2 font-semibold'}>
              <p>Welcome Joel</p>
          </div>

        {/*  section 1*/}

        <div className={'grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:mx-2'}>

            <div className={'  col-span-1 sm:col-span-2 lg:col-span-2 h-[11rem] lg:h-[14rem] xl:h-[16rem]  rounded flex items-center'}>

                {/*Total days section*/}

                <div className={'min-w-[17rem] w-[20rem] sm:w-[25rem] lg:min-w-[20rem] mx-auto h-[11rem] xl:h-[12rem] bg-background_shade_2 rounded'}>

                    <div className={'mx-auto my-4 flex items-center gap-2'}>
                        <div className={'w-full flex items-center mx-3 px-2'}>
                            <span className={'text-3xl rounded p-3 my-1 bg-white text-blue'}><HiMiniCalendarDays /></span>
                        </div>
                    </div>

                    <div className={'flex items-center text-md xl:text-xl mb-1 mx-3 px-2'}>
                        <p>Total Days</p>
                    </div>

                    <div className={' flex items-center text-md xl:text-xl justify-between my-2 mx-3 px-2'}>
                        <p>40</p>
                        <div className={'py-0.5 inline-flex gap-2 items-center bg-background_shade rounded'}>
                            <div className={'text-xl px-3 py-1 bg-white rounded-l'}><PiClockCountdown /></div>
                            <p className={'px-2 rounded-r'}>20</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className={'col-span-1 sm:col-span-2 lg:col-span-2 h-[11rem] lg:h-[14rem] xl:h-[16rem]  rounded flex items-center'}>

                {/*Internship organization card*/}

                <div className={'min-w-[17rem] w-[20rem] sm:w-[25rem] lg:min-w-[20rem] mx-auto h-[11rem] xl:h-[12rem] bg-background_shade_2 rounded'}>

                    <div className={'mx-auto my-4 flex items-center gap-2'}>
                        <div className={'w-full flex items-center mx-3 px-2'}>
                            <span className={'text-3xl rounded p-3 my-1 bg-white text-blue '}><HiMiniCalendarDays /></span>
                        </div>
                    </div>

                    <div className={'flex items-center text-md xl:text-xl mb-1 mx-3 px-2'}>
                        <p>Organization</p>
                    </div>

                    <div className={' flex items-center text-md xl:text-xl justify-start my-2 mx-3 px-2'}>
                        <p className={'truncate text-[100%] max-w-[18rem]'}>Eastern Mediteranean University</p>
                    </div>

                </div>

            </div>

            <div className={' bg-background_shade col-span-1 sm:col-span-4 lg:col-span-3 h-[14rem] lg:h-[16rem] xl:h-[18rem] rounded flex items-center'}>

            </div>

        </div>

        {/*  section 2*/}

        {/*<div className={'grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:mx-2'}>*/}

        {/*    <div className={' bg-background_shad col-span-1 sm:col-span-2 lg:col-span-2 h-[11rem] lg:h-[14rem] xl:h-[16rem]  rounded flex items-center'}>*/}

        {/*        <div className={'w-[20rem] sm:w-[25rem] mx-auto h-[11rem] xl:h-[14rem] bg-dark_3 rounded'}>*/}

        {/*        </div>*/}

        {/*    </div>*/}

        {/*    <div className={' bg-background_shad col-span-1 sm:col-span-2 lg:col-span-2 h-[11rem] lg:h-[14rem] xl:h-[16rem]  rounded flex items-center'}>*/}

        {/*        <div className={'w-[20rem] sm:w-[25rem] mx-auto h-[11rem] xl:h-[14rem] bg-dark_3 rounded'}>*/}

        {/*        </div>*/}

        {/*    </div>*/}

        {/*    <div className={' bg-background_shade col-span-1 sm:col-span-4 lg:col-span-3 h-[14rem] lg:h-[16rem] xl:h-[18rem] rounded flex items-center'}>*/}

        {/*    </div>*/}

        {/*</div>*/}


      </main>
  )
}
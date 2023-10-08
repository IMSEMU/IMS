import Link from "next/link";
import Image from "next/image";

export const HomeFooter = () => {
    const sitemap = [
        {"name" : "Homepage", "link": "/"},
        {"name" : "News & Announcement", "link": "/"},
        {"name" : "Completed Internships", "link": "/completedInternship"},
        {"name" : "Available Internship Positions", "link": "/internshipPositions"},
    ]
    const usefulLinks = [
        {"name" : "E.M.U. Official Website", "link": "https://www.emu.edu.tr/"},
        {"name" : "Student Portal", "link": "https://students.emu.edu.tr/"},
        {"name" : "L.M.S.", "link": "https://lms22-23spring.emu.edu.tr/login/index.php"},
        {"name" : "Staff Portal", "link": "https://staff.emu.edu.tr/"},
    ]
  return(
      <>
        <main className={"remove-highlight text-xs sm:text-sm md:text-md  w-full bg-background_shade_2 "}>
            <div className={"px-3 py-6 w-full max-w-[70.75rem] mx-auto flex-col md:flex-row flex justify-evenly gap-6"}>
                {/*sitemap*/}
                <div className={"flex-col flex text-center"}>
                    <p className={"text-sm sm:text-md md:text-lg text-blue my-2 md:my-1 font-bold"}>Sitemap</p>

                    {
                        sitemap.map((sitemap,index) => {
                            return(
                                <>
                                <Link href={sitemap.link} key={index} className={"my-2 hover:text-yellow"}>{sitemap.name}</Link>
                                </>
                            )
                        })
                    }
                </div>

                {/*sitemap*/}
                <div className={"flex-col flex text-center"}>
                    <p className={"my-2 md:my-1 font-bold text-sm sm:text-md md:text-lg text-blue "}>Useful Links</p>

                    {
                        usefulLinks.map((usefulLinks,index) => {
                            return(
                                <>
                                <Link href={usefulLinks.link} target="_blank" rel="noopener noreferrer" key={index} className={"my-2 hover:text-yellow"}>{usefulLinks.name}</Link>
                                </>
                            )
                        })
                    }
                </div>

                {/*sitemap*/}
                <div className={"flex-col flex justify-center items-center text-center"}>
                    {/*<p className={"my-2 md:my-1 font-bold"}>Contact</p>*/}
                    <Image
                        className={"w-[2.2rem] md:w-[2.8rem]"}
                        src={"/logo.svg"}
                        alt={"logo"}
                        height={100}
                        width={100}
                        priority
                    />
                    <p className={"font-semibold"}>Eastern Mediterranean University</p>
                    <p className={"font-normal"}>99628, Famagusta, Northern Cyprus</p>
                    <p className={"font-normal"}>Mersin 10, Turkey</p>

                    <div className={"my-2 flex flex-col"}>
                        <a href="tel:+903926301111"  className={"font-normal text-blue hover:text-yellow"}>Tel: +90 392 630 11 11</a>
                        <a href="mailto:info@emu.edu.tr"  className={"font-normal text-blue hover:text-yellow"}>E-mail: info@emu.edu.tr</a>
                    </div>

                </div>



            </div>
        </main>
      </>
  )
}
import Image from "next/image";

export const Jumbotron = () => {
    return(
        <>
            <main className={"m-1"}>
                <Image
                    className={"w-full h-[15rem] sm:h-[20rem] md:h-[25rem] xl:h-[32rem] object-cover"}
                    src={"/school of computing and technology.jpg"}
                    alt={"pic"}
                    width={2000}
                    height={2000}
                    priority
                />
            </main>
        </>
    )
}
import Image from "next/image";

export const Jumbotron = () => {
    return(
        <>
            <main className={"h-full m-2"}>
                <Image
                    className={"w-full object-contain"}
                    src={"/school of computing and technology 1.svg"}
                    alt={"pic"}
                    width={100}
                    height={50}
                    priority
                />
            </main>
        </>
    )
}
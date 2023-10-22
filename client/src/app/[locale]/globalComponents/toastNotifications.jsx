'use client'
import { BsCheckCircleFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import { FaTimesCircle } from "react-icons/fa";


export const SuccessToast = ({errorMssg , setErrorMssg}) => {

const [successVisible, setSuccessVisible] = useState(false);

useEffect(()=>{
    if (errorMssg ){
        setSuccessVisible(true);
        const timer = setTimeout(()=>{
            setSuccessVisible(false);
            setErrorMssg('');
        },3000);
    
        return(
            ()=>{clearTimeout(timer)}
        );
        
    }
},[errorMssg]);

    return(
        <div className="z-[99] ">
            { 
            <div className={successVisible ? 'block from-bottom  absolute bottom-10 right-5' : 'hidden'}>
                <div className="flex items-center justify-around content-center gap-2 rounded dark:border-l-white dark:border-none border-l-[green] border-l-[0.2rem] bg-white dark:bg-[#39b339] border-background_shade_2 border h-[3.5rem] max-w-[17rem]">
                    {/* toast icon */}
                    <div className="text-[green] dark:text-white 3/12 m-2 text-2xl"> <BsCheckCircleFill className=""/></div>

                    {/* tooast status and error */}
                    <p className="w-full font-semibold capitalize text-black dark:text-white text-start mr-2 text-sm">{errorMssg}</p>
                </div>
            </div>
            }

        </div>
    )
}

export const FailedToast = ({errorMssg , setErrorMssg}) => {

    const [failedVisible, setFailedVisible] = useState(false);
    
    useEffect(()=>{
        if (errorMssg ){
            setFailedVisible(true);
            const timer = setTimeout(()=>{
                setFailedVisible(false);
                setErrorMssg('');
            },3000);
            
            return(
                ()=>{clearTimeout(timer);}
                
            );
            
        }
    },[errorMssg]);
    
        return(
            <div className="z-[99] ">
                { 
                <div className={failedVisible ? 'block from-bottom  absolute bottom-10 right-5' : 'hidden'}>
                    <div className="flex items-center justify-around content-center gap-2 rounded dark:border-l-white dark:border-none border-l-[red] border-l-[0.2rem] bg-white dark:bg-[red] border-background_shade_2 border h-[3.5rem] max-w-[17rem]">
                        {/* toast icon */}
                        <div className="text-[red] dark:text-white 3/12 m-2 text-2xl"> <FaTimesCircle className=""/></div>
    
                        {/* tooast status and error */}
                        <p className="w-full font-semibold capitalize text-black dark:text-white text-start mr-2 text-sm">{errorMssg}</p>
                    </div>
                </div>
                }
    
            </div>
        )
    }
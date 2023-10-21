import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthConnect from "@/auth";
import {useState} from "react";

export const AppForm = (props) => {
    const [stdphoneno, setStdPhone] = useState('');
        const [stdaddress, setStdAddress] = useState('');
        const [companyname, setCompname] = useState('');
        const [fields, setFields] = useState('');
        const [website, setWebsite] = useState('');
        const [compemail, setCompEmail] = useState('');
        const [compaddress, setCompAddress] = useState('');
        const [compphone, setCompPhone] = useState('');
        const [compfax, setCompFax] = useState('');
        const [workdesc, setWorkdesc] = useState('');
        const [supfname, setFname] = useState('');
        const [suplname, setLname] = useState('');
        const [supemail, setEmail] = useState('');
        const [position, setPosition] = useState('');
        const [msg, setMsg] = useState('');
        const router = useRouter();
        const [imageSrc, setImageSrc] = useState('');
    const [form , setForm] = useState(1);

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = (e) => setImageSrc(e.target.result);
    reader.readAsDataURL(selectedFile);
  } else {
    setImageSrc('/avatar.png');
  }
};


    const submitApplication = async (e) => {
        e.preventDefault();
        try { 
            const response = await AuthConnect.post('/createapp', {
                stdphoneno: stdphoneno, 
                stdaddress: stdaddress, 
                companyname: companyname, 
                fields: fields, 
                website: website, 
                compemail: compemail, 
                compaddress: compaddress, 
                compphone: compphone, 
                compfax: compfax, 
                workdesc: workdesc, 
                supfname: supfname, 
                suplname: suplname, 
                supemail: supemail, 
                position: position,
            });
    
            if (response.data.status === 'success') {
                alcort("Application Successful");
                router.push("/internDashboard");
            }// else {
            //     alert("Registration Unsuccessful");
            // }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
            alert("Application Error"); // You can add a generic error message here
        }
    };
    return ( 
        <main>
            <div className="my-1 flex justify-center items-center font-bold pt-5">
                <div className="border-x-[0.4rem] text-2xl border-yellow"><p className="px-2">Internship Application Form</p></div>
            </div>
              <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
                <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-fit pb-10">
                   
                   {/* LOgbook Add section */}
                    <div className=" w-full">
                        <p className={" font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                          Student Information
                        </p>
                        {/* profile pic */}
                        <div className="w-full flex justify-center mt-1">
                            <Image 
                                src={imageSrc ? imageSrc : "/avatar.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                priority
                                className="h-[7rem] w-[7rem] rounded-2xl"
                            />
                        </div>

                        {/* forms */}
                        <form onSubmit={submitApplication}>
                            <div className="mx-4 lg:mx-16">
                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                <div className="w-1/2">
                                    <span>Name: {props.firstname} {props.lastname} </span>
                                </div>

                                <div className="w-1/2">
                                    <span>Student Number: {props.stdid} </span>
                                </div>
                            </div>

                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                <div className="w-1/2">
                                <span>Email: {props.email} </span>
                                </div>
                            </div>

                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Telephone Number"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        value={stdphoneno}
                                        onChange={(e) => setStdPhone(e.target.value)}
                                        
                                    />
                            </div>

                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Postal Address"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        value={stdaddress}
                                        onChange={(e) => setStdAddress(e.target.value)}
                                    />

                            </div>
                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                    <input
                                        type={'file'}
                                        name=""
                                        accept=".png, .jpg, .jpeg"
                                        onChange={handleFileChange}
                                        id=""
                                        placeholder="profile Picture"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white file:text-blue file:font-bold file:bg-white file:border file:rounded dark:bg-dark_2 pr-4 py-0.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>
                            </div>
                            <div className={"pt-10"}>
                            <p className={" font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                          Company Information
                        </p></div>
                        <div className="mx-4 lg:mx-16">
                      <div className="mt-2 md:mt-4 relative flex space-x-2">
                       
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Company Name"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={companyname}
                                        onChange={(e) => setCompname(e.target.value)}
                              />
                      </div>
                      <div className="mt-2 md:mt-4 relative flex space-x-2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Working Fields"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={fields}
                                        onChange={(e) => setFields(e.target.value)}
                              />
                    
                      </div>

                      <div className="mt-2 md:mt-4 relative flex space-x-2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Organizational Web Address"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                              />
                      </div>

                      <div className="mt-2 md:mt-4 relative flex space-x-2">
                       
                              <input
                                  type={'email'}
                                  name=""
                                  id=""
                                  placeholder="Organizational Email"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={compemail}
                                        onChange={(e) => setCompEmail(e.target.value)}
                              />
                      
                      </div>

                      <div className="mt-2 md:mt-4 relative flex space-x-2">
                         
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Postal Address"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={compaddress}
                                        onChange={(e) => setCompAddress(e.target.value)}
                              />
                      </div>

                      <div className="mt-2 md:mt-4 relative flex space-x-2">
                          <div className="w-1/2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Telephone Number"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={compphone}
                                        onChange={(e) => setCompPhone(e.target.value)}
                              />
                          </div>
                          <div className="w-1/2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Fax"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={compfax}
                                        onChange={(e) => setCompFax(e.target.value)}
                              />
                          </div>
                      </div>


                      <div className="mt-2 md:mt-4 relative flex space-x-2">

                      <div className="w-full">
                              <textarea
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Description of the work to be done during internship and the reason for choosing this company."
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  focus:outline-none h-[8rem]"
                                  value={workdesc}
                                        onChange={(e) => setWorkdesc(e.target.value)}
                              />
                          </div>

                      </div>
                  </div>
                  <div className={"pt-10"}>
                            <p className={" font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                          Company Internship Supervisor Information
                        </p></div>

                        <div className="mx-4 lg:mx-16 ">
                        <div className="mt-2 md:mt-4 relative flex space-x-2">
                          <div className="w-1/2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="First Name"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={supfname}
                                        onChange={(e) => setFname(e.target.value)}
                              />
                          </div>
                          <div className="w-1/2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Last Name"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={suplname}
                                        onChange={(e) => setLname(e.target.value)}
                              />
                          </div>
                      </div>

                      <div className="mt-2 md:mt-4 relative flex space-x-2">
                          <div className="w-1/2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Email"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={supemail}
                                        onChange={(e) => setEmail(e.target.value)}
                              />
                          </div>
                          <div className="w-1/2">
                              <input
                                  type={'text'}
                                  name=""
                                  id=""
                                  placeholder="Position in the Company"
                                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                  value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                              />
                          </div>
                      </div>


                                <div className="w-full flex items-center justify-end text-white pt-10">
                                 <button type="submit" className="bg-blue py-2 px-3.5 rounded ">Submit</button>
                                </div>
                            
                        </div>

                        </form>

                    </div>

                </div>
            </section>
        </main>
     );
}
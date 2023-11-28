import React from "react";
import Image from "next/image";

export const PrintConfirmation = React.forwardRef(({ formData }, ref) => {
  return (
    <div className="text-sm mx-10 my-10" ref={ref}>
      <div className="flex">
        <Image
          className={"w-[4.5rem]"}
          src={"/logo.svg"}
          alt={"logo"}
          height={100}
          width={100}
        />
        <div className="pl-5 text-black/45 text-base align-middle">
          <p>DOĞU AKDENİZ ÜNİVERSİTESİ</p>
          <p>EASTERN MEDITERRANEAN UNIVERSITY</p>
          <p className="text-[8px]">
            Gazimağusa - KKTC. Tel: +90 (392) 630 12 17, Fax: +90 (392) 365 13
            17
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center font-bold text-base">
          <p>Summer Training Confirmation Form</p>
        </div>
      </div>
      <p className="font-bold text-base">
        Information about the Company and Trainee
      </p>
      <div className="w-full mt-3 text-left">
        <table className="w-full border border-collapse">
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Name of the Company
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.companyname}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Working Fields
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.fields}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Postal Address
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.compaddress}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">City</th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.city}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">Country</th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.country}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">Fax</th>
            <td className="border border-collapse pl-2 pr-2">{formData.fax}</td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Telephone Number
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.compphone}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Organisational Email
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.compemail}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Organisational Web Address
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.website}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Name and Surname of the Trainee
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.stdfname} {formData.stdlname}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Planned Trianing Start Date
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.startdate}
            </td>
          </tr>
          <tr className="border border-collapse">
            <th className="border border-collapse pl-2 pr-2 w-1/2">
              Planned Trianing End Date
            </th>
            <td className="border border-collapse pl-2 pr-2">
              {formData.enddate}
            </td>
          </tr>
        </table>
      </div>

      <p className="font-bold mt-3 text-base">
        The work to be done by the Student
      </p>
      <div className="w-full mt-3">
        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={1}
                checked={formData.selectedWork.includes(1)}
              />
            </div>
            <div>
              <label> Developing Software </label>
            </div>
          </div>
        </div>

        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={2}
                checked={formData.selectedWork.includes(2)}
              />
            </div>
            <div>
              <label>Operating system installation and maintenance </label>
            </div>
          </div>
        </div>

        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={3}
                checked={formData.selectedWork.includes(3)}
              />
            </div>
            <div>
              <label>
                Working as part of a team in a large software project
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={4}
                checked={formData.selectedWork.includes(4)}
              />
            </div>
            <div>
              <label>Hardware fault diagnosis and repairs </label>
            </div>
          </div>
        </div>
        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={5}
                checked={formData.selectedWork.includes(5)}
              />
            </div>
            <div>
              <label>Designing WEB pages</label>
            </div>
          </div>
        </div>
        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={6}
                checked={formData.selectedWork.includes(6)}
              />
            </div>
            <div>
              <label>
                Developing a WEB application using ASP, .NET, PHP etc
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={7}
                checked={formData.selectedWork.includes(7)}
              />
            </div>
            <div>
              <label>Designing/working with databases </label>
            </div>
          </div>
        </div>
        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={8}
                checked={formData.selectedWork.includes(8)}
              />
            </div>
            <div>
              <label>Learning to use complex company software </label>
            </div>
          </div>
        </div>
        <div>
          <div className=" inline-flex   space-x-2 ">
            <div>
              <input
                type={"checkbox"}
                name=""
                id=""
                value={9}
                checked={formData.selectedWork.includes(9)}
              />
            </div>
            <div>
              <label>Network installation and maintenance</label>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <label>Other (please state in the box below) </label>
            </div>
            <div className="border w-full h-[120px] p-2">{formData.other}</div>
          </div>
        </div>
      </div>

      <p className="font-bold mt-3 text-base">
        Official Signature and Stamp of the Company
      </p>
      <div className="w-[150px] h-[70px] mt-3 border"></div>
    </div>
  );
});

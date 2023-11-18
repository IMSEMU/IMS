import React from "react";
import Image from "next/image";

export const PrintInsurance = React.forwardRef(({ formData }, ref) => {
  return (
    <div className="text-xs mx-10 my-10" ref={ref}>
      <div className="flex">
        <Image
          className={"w-[4.5rem]"}
          src={"/logo.svg"}
          alt={"logo"}
          height={100}
          width={100}
        />
        <div className="pl-5 text-black/45 text-sm align-middle">
          <p>DOĞU AKDENİZ ÜNİVERSİTESİ</p>
          <p>EASTERN MEDITERRANEAN UNIVERSITY</p>
          <p className="text-[8px]">
            Gazimağusa - KKTC. Tel: +90 (392) 630 12 17, Fax: +90 (392) 365 13
            17
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center font-bold text-sm">
          <p>T.R.N.C.</p>
          <p>EASTERN MEDITERRANEAN UNIVERSITY</p>
          <p>MANDATORY INTERNSHIP FORM(*)</p>
        </div>
        <div className="border text-center align-middle absolute h-20 w-20 right-10">
          Picture
        </div>
      </div>
      <p className="font-bold mt-3">TO WHOM IT MAY CONCERN</p>
      <p className="">
        Our university students are obliged to do internships in institutions
        and businesses until the end of their education period. We would like to
        thank you for your interest in the internship of the student whose
        information is given below, and wish you success in your studies.
      </p>
      <div className="w-full mt-3">
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Name - Surname
          </div>
          <div className="border pl-2 col-span-5 border-r-0 border-b-0">
            {formData.stdfname}
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            ID/Passport Number
          </div>
          <div className="border pl-2 col-span-3 border-b-0">
            {formData.idpassno}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Student Number
          </div>
          <div className="border pl-2 col-span-5 border-r-0 border-b-0">
            {formData.stdid}
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Academic Year
          </div>
          <div className="border pl-2 col-span-3 border-b-0">
            {formData.ayear}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Department/Program
          </div>
          <div className="border pl-2 col-span-5 border-r-0 border-b-0">
            {formData.dept}
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Faculty/School
          </div>
          <div className="border pl-2 col-span-3 border-b-0">
            {formData.faculty}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Email
          </div>
          <div className="border pl-2 col-span-5 border-r-0 border-b-0">
            {formData.stdemail}
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Phone Number (GSM)
          </div>
          <div className="border pl-2 col-span-3 border-b-0">
            {formData.stdphoneno}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-2 border-r-0">Address</div>
          <div className="border pl-2 col-span-10">{formData.stdaddress}</div>
        </div>
      </div>

      <p className="font-bold mt-3">
        INFORMATION ABOUT THE PLACE OF INTERNSHIP
      </p>
      <div className="w-full mt-3">
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Start Date of Internship
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            {formData.startdate.split("T")[0]}
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            End Date
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            {formData.enddate.split("T")[0]}
          </div>
          <div className="border pl-2 col-span-2 border-r-0 border-b-0">
            Duration (Working Days)
          </div>
          <div className="border pl-2 col-span-1 border-b-0">
            {formData.duration}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Company Name
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.companyname}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Company Address
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.compaddress}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Fields
          </div>
          <div className="border pl-2 col-span-9  border-b-0">
            {formData.fields}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Phone Number
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.compphone}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0">Email</div>
          <div className="border pl-2 col-span-3 border-r-0">
            {formData.compemail}
          </div>
          <div className="border pl-2 col-span-2 border-r-0 ">Website</div>
          <div className="border pl-2 col-span-4">{formData.compemail}</div>
        </div>
      </div>

      <p className="font-bold mt-3">EMPLOYER OR AUTHORITY</p>

      <div className="w-full mt-3">
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 row-span-2 border-r-0 border-b-0">
            Name and Surname
          </div>
          <div className="border pl-2 col-span-9 row-span-2 border-b-0 ">
            {formData.supfname} {formData.suplname}
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-4">
          <div className="border pl-2 col-span-3 row-span-1 border-r-0 border-b-0">
            Position
          </div>
          <div className="border pl-2 col-span-3 row-span-1 border-r-0 border-b-0">
            {formData.position}
          </div>
          <div className="border pl-2 col-span-3 row-span-3 border-r-0 row-span-3 text-center">
            <p className="h-10">
              It is suitable for the student to do internship.
            </p>
            <p>Signature / Stamp</p>
          </div>
          <div className="italic text-center border pl-2 col-span-3 row-span-3">
            Official Acceptance letter containing the student information of the
            company is sufficient.
          </div>
          <div className="border pl-2 col-span-3 row-span-1 border-r-0 border-b-0">
            E-mail Address
          </div>
          <div className="border pl-2 col-span-3 row-span-1 border-r-0 border-b-0">
            {formData.supemail}
          </div>
          <div className="border pl-2 col-span-3 row-span-1 border-r-0 ">
            Date:
          </div>
          <div className="border pl-2 col-span-3 row-span-1 border-r-0">
            <input type="text" name="employer_date" />
          </div>
        </div>
      </div>

      <p className="font-bold mt-3">STUDENT REGISTRATION INFORMATION</p>
      <div className="w-full mt-3">
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Surname
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.stdlname}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Name
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.stdfname}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Father's Name
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.fname}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Mother's Name
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.mname}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Place of Birth
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.pob}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Date of Birth
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.dob}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            ID/Passport Number
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.idpassno}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0 border-b-0">
            Date of Issue
          </div>
          <div className="border pl-2 col-span-9 border-b-0">
            {formData.doi}
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-3 border-r-0">
            Validity Period
          </div>
          <div className="border pl-2 col-span-9">{formData.validity}</div>
        </div>
      </div>

      <div className="w-full mt-3">
        <div className="grid grid-cols-12 font-bold">
          <div className="text-center pl-2 col-span-4">STUDENT'S SIGNATURE</div>
          <div className="text-center pl-2 col-span-4">
            INTERNSHIP COMMISSION APPROVAL
          </div>
          <div className="text-center pl-2 col-span-4">FACULTY APPROVAL</div>
        </div>
        <div className="h-16 grid grid-cols-12">
          <div className="border pl-2 col-span-4 border-b-0 border-r-0">
            I confirm that the information written on the document is correct.
          </div>
          <div className="border pl-2 col-span-4 border-b-0 border-r-0"></div>
          <div className="border pl-2 col-span-4 border-b-0"></div>
        </div>
        <div className="grid grid-cols-12">
          <div className="border pl-2 col-span-4 border-t-0 border-r-0">
            Date:
          </div>
          <div className="border pl-2 col-span-4 border-t-0 border-r-0">
            Date:
          </div>
          <div className="border pl-2 col-span-4 border-t-0">Date:</div>
        </div>
      </div>
      <p className="text-[8px]">
        <span className="font-bold">(*)</span>This form is prepared in 3
        original copies (not a photocopy) in the{" "}
        <span className="font-bold"></span>computer environment and a picture is
        attached to each form. At the latest 15 days before the internship start
        date, It is obligatory to submit 1 copy of approved forms to the
        Department Secretary office, and 2 copies (together with 3{" "}
        <span className="font-bold">copies of ID/Passport</span>, 3{" "}
        <span className="font-bold">Acceptance Letters from Company</span>, 3{" "}
        <span className="font-bold">
          Certificates of Health Insurance Eligibility Verification
        </span>{" "}
        to be obtained from SGK(Social Security Institution), and 2 additional{" "}
        <span className="font-bold">passport photos</span>) to Student Affairs.{" "}
        <span className="italic">
          (It is necessary to comply with the specified period for the
          transactions to be made between our university and SGK).
        </span>
      </p>
    </div>
  );
});

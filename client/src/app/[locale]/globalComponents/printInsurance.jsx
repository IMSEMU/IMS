import React from "react";

export const PrintInsurance = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <table border="1" cellpadding="5">
        <tr>
          <th>Student Information</th>
          <td></td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>
            <input type="text" name="student_name" />
          </td>
        </tr>
        <tr>
          <td>Surname:</td>
          <td>
            <input type="text" name="student_surname" />
          </td>
        </tr>
        <tr>
          <td>ID/Passport Number:</td>
          <td>
            <input type="text" name="student_id_passport_number" />
          </td>
        </tr>
        <tr>
          <td>Student Number:</td>
          <td>
            <input type="text" name="student_number" />
          </td>
        </tr>
        <tr>
          <td>Department/Program:</td>
          <td>
            <input type="text" name="student_department_program" />
          </td>
        </tr>
        <tr>
          <td>Academic Year:</td>
          <td>
            <input type="text" name="student_academic_year" />
          </td>
        </tr>
        <tr>
          <td>Faculty/School:</td>
          <td>
            <input type="text" name="student_faculty_school" />
          </td>
        </tr>
        <tr>
          <td>E-mail:</td>
          <td>
            <input type="email" name="student_email" />
          </td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>
            <input type="text" name="student_address" />
          </td>
        </tr>
        <tr>
          <td>Phone Number (GSM):</td>
          <td>
            <input type="text" name="student_phone_number" />
          </td>
        </tr>

        <tr>
          <th>Information About the Place of Internship</th>
          <td></td>
        </tr>
        <tr>
          <td>Start Date of Internship:</td>
          <td>
            <input type="date" name="internship_start_date" />
          </td>
        </tr>
        <tr>
          <td>Company Name:</td>
          <td>
            <input type="text" name="internship_company_name" />
          </td>
        </tr>
        <tr>
          <td>End Date:</td>
          <td>
            <input type="date" name="internship_end_date" />
          </td>
        </tr>
        <tr>
          <td>Duration (Working Days):</td>
          <td>
            <input type="number" name="internship_duration_working_days" />
          </td>
        </tr>
        <tr>
          <td>Company Address:</td>
          <td>
            <input type="text" name="internship_company_address" />
          </td>
        </tr>
        <tr>
          <td>Field:</td>
          <td>
            <input type="text" name="internship_field" />
          </td>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <td>
            <input type="text" name="internship_phone_number" />
          </td>
        </tr>
        <tr>
          <td>E-mail Address:</td>
          <td>
            <input type="email" name="internship_email_address" />
          </td>
        </tr>
        <tr>
          <td>Website:</td>
          <td>
            <input type="url" name="internship_website" />
          </td>
        </tr>

        <tr>
          <th>Employer or Authority</th>
          <td></td>
        </tr>
        <tr>
          <td>Name and Surname:</td>
          <td>
            <input type="text" name="employer_name_surname" />
          </td>
        </tr>
        <tr>
          <td>Position:</td>
          <td>
            <input type="text" name="employer_position" />
          </td>
        </tr>
        <tr>
          <td>E-mail Address:</td>
          <td>
            <input type="email" name="employer_email_address" />
          </td>
        </tr>
        <tr>
          <td>Date:</td>
          <td>
            <input type="date" name="employer_date" />
          </td>
        </tr>

        <tr>
          <th>Student Registration Information</th>
          <td></td>
        </tr>
        <tr>
          <td>Surname:</td>
          <td>
            <input type="text" name="student_registration_surname" />
          </td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>
            <input type="text" name="student_registration_name" />
          </td>
        </tr>
        <tr>
          <td>Father Name:</td>
          <td>
            <input type="text" name="student_registration_father_name" />
          </td>
        </tr>
        <tr>
          <td>Mother Name:</td>
        </tr>
      </table>
    </div>
  );
});

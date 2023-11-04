import { DeptInternshipAddPage } from "./components/dept_Add_Internship_Page"

export const metadata = {
    title: 'Available Internships | I.M.S.',
  }
  export default function InternshipPositions() {
  
    return (
      <main className={"bg-white dark:bg-dark_2 min-h-full"}>
          <div className={''}>
                <DeptInternshipAddPage />
          </div>
      </main>
    )
  }
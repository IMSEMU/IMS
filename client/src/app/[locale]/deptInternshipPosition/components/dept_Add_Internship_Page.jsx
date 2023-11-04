import { TopNav } from "../../internDashboard/components/topNav"
import InternDashboard from "../../internDashboard/page"
import { AddInternshipPosition } from "./addInternshipPosition"
import { DeptInternshipDisplay } from "./deptInternshipDisplay"

export const DeptInternshipAddPage = () => {
    return(
        <div className="h-screen">
            <TopNav />
                <div className="flex mt-8 justify-center items-center">
                    <div className="w-full max-w-[50rem] border flex justify-between items-center border-background_shade_2 shadow-xl h-[32rem] rounded">
                        <div className="w-1/2">
                            <AddInternshipPosition />
                        </div>
                        <div className="w-1/2">
                            <div className="overflow-y-auto w-[95%] flex flex-nowrap justify-center ">
                                <DeptInternshipDisplay />
                            
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

import { SupervisorEvaluation } from "./components/supervisorEvaluation";
import { Navbar } from "../globalComponents/Navbar";
import { CoordinatorEvaluation } from "./components/coordinatorEvaluation";
  
const Evaluation = () => {

    return ( 
    <>
        <Navbar/>

        <SupervisorEvaluation/>
        </>
     );
}
 
export default Evaluation;
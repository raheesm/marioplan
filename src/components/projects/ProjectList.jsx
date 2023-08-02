import { useParams } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
    return ( 
        <div className="project-list section">
            <ProjectSummary/>
            <ProjectSummary/>
            
        </div>
     );
}
 
export default ProjectList;
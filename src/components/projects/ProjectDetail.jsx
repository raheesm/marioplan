import { useParams } from "react-router-dom";

const ProjectDetail = () => {

    const {id} = useParams()  
    
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore molestiae voluptatum doloremque minima odit iusto rerum suscipit veritatis laudantium qui dolores cupiditate alias, omnis cumque repellat eveniet magnam commodi!</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div className="">Posted by Net Ninja</div>
                    <div>2nd September 2am</div>
                    
                </div>
            </div>

        </div>
     );
}
 
export default ProjectDetail;
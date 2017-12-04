import React            from "react";

import ExpandCollapse   from "./ExpandCollapse";
import ProjectType      from "./ProjectType";
import ProjectTitle     from "./ProjectTitle";
import RemainingCount   from "./RemainingCount";
import ProjectActions   from "./ProjectActions";

var ProjectContainer = () => {
    return (
        <div>
            <ExpandCollapse />
            <ProjectType />
            <ProjectTitle />
            <RemainingCount />
            <ProjectActions />
        </div>
    );
};

export default ProjectContainer;
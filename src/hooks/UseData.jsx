import {ProjectData} from "../Data/ProjectsData";

export const useData = () => {
  const getData = (projectID) => {
    return ProjectData.filter((data) => data.id === projectID)[0];
  };
  return {
    getData,
  };
};

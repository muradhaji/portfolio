let projectsRequest = null;

// Projects are static, so fetch them once and share the result.
export const getProjects = () => {
  if (!projectsRequest) {
    projectsRequest = fetch('/projects/projects.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load projects.json');
        return res.json();
      })
      .then((projects) => [...projects].sort((a, b) => a.order - b.order))
      .catch((err) => {
        projectsRequest = null;
        throw err;
      });
  }
  return projectsRequest;
};

export const getProjectById = async (id) => {
  const projects = await getProjects();
  return projects.find((p) => String(p.id) === String(id)) || null;
};

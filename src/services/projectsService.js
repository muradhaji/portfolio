export const getProjects = async () => {
  const res = await fetch('/projects/projects.json');
  if (!res.ok) throw new Error('Failed to load projects.json');
  return await res.json();
};

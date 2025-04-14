export const getJobs = async (isHome) => {
  const res = await fetch(isHome ? "/api/jobs?_limit=3" : "/api/jobs");
  return res.json();
};

export const addJobs = async (userData) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const updateJobs = async (id, updatedData) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};

export const deleteJobs = async (id) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
};

const API_URL = "http://localhost:4000";

export async function loginRequest(email: string, password: string) {
  const res = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return data;
}

export async function registerRequest(userData: {
  name: string;
  email: string;
  password: string;
  role: string;
  phone?: string;
}) {
  const res = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  return data;
}

// Application API functions
export async function getAllApplications(token: string) {
  const res = await fetch(`${API_URL}/application`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function updateApplicationStatus(
  id: number,
  status: string,
  token: string,
  position?: string,
  description?: string
) {
  const res = await fetch(`${API_URL}/application/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, position, description }),
  });

  const data = await res.json();
  return data;
}

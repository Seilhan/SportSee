const URL = "http://localhost:3000/user/";

export async function getUserInfo(id) {
  return new Promise((resolve) => {
    fetch(URL + id)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function getUserActivity(id) {
  return fetch(URL + id + "/activity").then((res) => res.json());
}

export async function getUserSession(id) {
  return fetch(`${URL + id}/average-sessions`).then((res) => res.json());
}

export async function getUserPerformance(id) {
  return fetch(`${URL + id}/performance`).then((res) => res.json());
}

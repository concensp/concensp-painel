const URL_API = "https://www.api.concensp.com.br";

const api = {
  verifyToken: async (token: string) => {
    return true;
  },
  getDiarios: () => {
    return fetch(URL_API + "/diario", {
      method: "get",
    });
  },
  newDiario: (body: any) => {
    return fetch(URL_API + "/diario", {
      method: "POST",
      body,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")!,
      },
    });
  },
  deleteDiario: (id: string) => {
    return fetch(URL_API + "/diario/" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")!,
      },
    });
  },
  login: (body: { user: string; pass: string }) => {
    return fetch(URL_API + "/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default api;

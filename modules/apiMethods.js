export function methodsAPI(method, url, obj) {
  //Get, Delete -  url, id
  return new Promise((resolve, reject) => {
    if (method === "DELETE" || method === "GET") {
      fetch(url, {
        method: method,
      })
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => console.error("Error", error.message));
    } else {
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => console.error("Error"));
    }
  });
}

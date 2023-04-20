const postFuncs = {
  postAddTask: function (method, url, body = null) {
    const headers = {
      "Content-Type": "application/json",
    };
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    });
  },
  postDeleteTask: function (id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
  },
  postOnCheck: function (id, isDone) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone }),
    });
  },
  postEditTask: function (id, title, desc) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, desc }),
    });
  },
};

export const postAddTask = postFuncs.postAddTask;
export const postDeleteTask = postFuncs.postDeleteTask;
export const postOnCheck = postFuncs.postOnCheck;
export const postEditTask = postFuncs.postEditTask;

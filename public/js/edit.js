const post_id = document.querySelector("#post-id").value;
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const body = document.querySelector("#post-body").value;

  if (title && body) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post");
    }
  }
};

const delButtonHandler = async() => {

    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  };

document
  .querySelector(".new-project-form")
  .addEventListener("click", newFormHandler);

document
  .querySelector("#delete")
  .addEventListener("click", delButtonHandler);

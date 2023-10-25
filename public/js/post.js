
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
const body = document.querySelector("#body").value;
  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create post.");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);
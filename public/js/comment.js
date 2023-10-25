const post_id = document.querySelector("#post-id").value;
const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment").value;

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.redirected) {
      document.location.assign(response.url);
    } else if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to update comment.");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

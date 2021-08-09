async function editFormHandler(event) {
    event.preventDefault();
    // get the post title and content inputted in the text boxes 
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-content"]').value;
    // split the route path and fetch id 
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT', // PUT method to update the post 
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/'); // render the dashboard with  updated post
      } else {
        alert(response.statusText);
      }
  }
// Event Listener when subnit button is clicked 
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

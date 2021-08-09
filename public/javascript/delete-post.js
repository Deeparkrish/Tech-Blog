async function deleteFormHandler(event) {
    event.preventDefault();
    // get  the corresponding  post id 
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE', // use DELETE  route  method 
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/'); // show the dashboard with post deleted 
      } else {
        alert(response.statusText);
      }
    
  }
  // Call the eventlistener function when delete button is clicked 
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

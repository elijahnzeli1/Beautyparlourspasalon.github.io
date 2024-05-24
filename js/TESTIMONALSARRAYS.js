document.addEventListener("DOMContentLoaded", function() {
  const blogPostsContainer = document.querySelector(".blog-posts");
  const testimonialContainer = document.querySelector("#testimonial-container");

  const blogPosts = [
    { title: "Post 1", content: "..." },
    // ... other blog posts
  ];

  const testimonials = [
    { name: "Mr Nthuku", testimonial: " GREAT WORK YOU HAVE DONE " },
    // ... other testimonials
  ];

  // Display blog posts
  blogPosts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("col-md-4", "mb-3"); 
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    blogPostsContainer.appendChild(postDiv);
  });

  // Display testimonials
  testimonials.forEach(testimonial => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("col-md-4", "mb-3"); 
    testimonialDiv.innerHTML = `
      <div class="message client-message">
        <p>${testimonial.testimonial}</p>
        <footer class="blockquote-footer">${testimonial.name}</footer>
      </div>`; 
    testimonialContainer.appendChild(testimonialDiv);
  });
});

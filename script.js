
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', searchPosts);


function searchPosts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach((post) => {
    const postText = post.textContent.toLowerCase();
    if (postText.includes(searchTerm)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}
const body = document.body;

function searchPosts() {
  const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach((post) => {
    const postText = post.textContent.toLowerCase();
    if (postText.includes(searchTerm)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', searchPosts);
  searchButton.addEventListener('click', () => {
    document.body.classList.add('search-mode');
  });
});
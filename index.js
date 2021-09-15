const $form = document.querySelector('form');
const $blogList = document.getElementById('blog-list');
let postsArray = [];

function renderPosts(posts) {
  let html = '';
  posts.forEach((post) => {
    html += `
        <div class='post'>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        </div>
        `;
  });
  $blogList.innerHTML = html;
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts(postsArray);
  });

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('hi');
  const formData = new FormData($form);

  const title = formData.get('title');
  const body = formData.get('body');
  const data = {
    title,
    body,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  };

  fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

  postsArray = [data, ...postsArray];
  renderPosts(postsArray);
});

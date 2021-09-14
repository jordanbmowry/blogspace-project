const $form = document.querySelector('form');

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then((response) => response.json())
  .then((data) => {
    const firstFivePosts = data.slice(0, 5);
    let html = '';
    firstFivePosts.forEach((post) => {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr>
        `;
    });
    document.getElementById('blog-list').innerHTML = html;
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
});

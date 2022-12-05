const conatiner = document.querySelector('.container');

function fillPost(posts){
  for (const post of posts) {
    const div = document.createElement('div')
    div.className = "card-post";

    conatiner.appendChild(div)

    const h1 = document.createElement('h1');
    const strong = document.createElement('strong');
    const p = document.createElement('p');

    h1.textContent = post.id;
    div.appendChild(h1)
    strong.textContent = post.title;
    div.appendChild(strong)
    p.textContent = post.body;
    div.appendChild(p)
  }
}

async function loadPost() {
  try {
    const response = await api.get('/posts');
    if(response.status === 200){
      fillPost(response.data);
      console.log(response.data);
    }
    
  } catch (error) {
    console.log(error.data.response);
  }
}

loadPost();
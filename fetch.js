// fetch на минималке

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })


// fetch на максималке 
(async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    } catch (error) {
    console.error('Ошибка:', error);
  }
};

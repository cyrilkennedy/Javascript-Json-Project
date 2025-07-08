const sectionTag = document.querySelector("section");

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(allfetched => {
      const only40 = allfetched.slice(0, 40); // Limit to 40 results
      only40.forEach(album => {
        sectionTag.innerHTML += `
          <div class="json">
            <h1>Album Title:</h1>
            <h3>${album.title}</h3>
            <p>User ID: ${album.userId}</p>
            <p>Album ID: ${album.id}</p>
           
          </div>
        `;
      });
    });
};

fetchData();












  const form = document.getElementById('registerForm');
  const message = document.getElementById('message');

//  form.addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent form from refreshing page

const handleSubmit = (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!email){
    message.style.color = 'red';
    message.textContent = 'Email is required.';
    return;
  }
  if (!firstName) {
    message.style.color = 'red';
    message.textContent = 'First name is required.';
    return;
  }
  if (!lastName) {
    message.style.color = 'red';
    message.textContent = 'Last name is required.';
    return;
  }
  if (!password ||password.length <6) {
    message.style.color = 'red';
    message.textContent = 'Password is required.';
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = 'red';
    message.textContent = 'Passwords do not match.';
  }
  else {
    message.style.color = 'green';
    message.textContent = `Registration successful! `;
    console.log({ email, firstName, lastName, password });
  }
};



form.addEventListener("submit", handleSubmit);
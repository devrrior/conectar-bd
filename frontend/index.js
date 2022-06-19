const formGet = document.getElementById('getUsuario');
const formPost = document.getElementById('postUsuario');
const formPut = document.getElementById('putUsuario');
const formDelete = document.getElementById('deleteUsuario');

formGet.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const id = e.target.id.value;

  await fetch(`http://127.0.0.1:3000/user/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        message = data.message;
      } else {
        message = `ID: ${data.id} | Primer Nombre: ${data.first_name} | Edad: ${data.age}`;
      }
    });

  document.getElementById('textoGet').innerHTML = message;
});

formPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const firstName = e.target.firstName.value;
  const age = e.target.age.value;

  await fetch('http://127.0.0.1:3000/user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name: firstName, age: age }),
  })
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
    });

  document.getElementById('textoPost').innerHTML = message;
});

formPut.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const id = e.target.id.value;
  const firstName = e.target.firstName.value;
  const age = e.target.age.value;

  await fetch(`http://127.0.0.1:3000/user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name: firstName, age: age }),
  })
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
    });

  document.getElementById('textoPut').innerHTML = message;
});

formDelete.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const id = e.target.id.value;

  await fetch(`http://127.0.0.1:3000/user/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message) {
        message = data.message;
      } else {
        message = `ID: ${data.id} | Primer Nombre: ${data.first_name} | Edad: ${data.age}`;
      }
    });

  document.getElementById('textoDelete').innerHTML = message;
});

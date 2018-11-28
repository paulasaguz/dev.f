const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

getAllAutores = ()=> {
  const URL = 'authors/'
  return new promise((resolve, reject)=>{
    request.get(`${URL_BASE}${URI}`, (err, response, body)=>{
      const json = JSON.parse(body)
      response.statusCode == 200
      ? resolve(json)
      : reject("error en el GET")
    })
  })
}

createAuthor = (nombre, apellidos, bio, genero, edad) => {
  const URI = 'authors/'
  const autorAEnviar = {
      name : nombre,
      last_name : apellidos,
      nacionalidad : 'MX',
      biography : bio,
      gender : genero,
      age : edad
  }
  const URL = `${URL_BASE}${URI}`
  return new Promise((resolve,reject)=>{
      request.post({url: URL, form: autorAEnviar}, (err, response, body)=>{
          const json = JSON.parse(body)
          console.log(response.statusCode)
          response.statusCode === 201
          ? resolve(json)
          : reject(err)
      });
  });
}

// createAuthor('Paula', 
//     'Johana', 
//     'dev',
//     'F', 
//     24)
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

getAuthorById = (id)=>{
  const URI = 'authors/'
  return new Promise((resolve, reject)=>{
    request.get(`${URL_BASE}${URI}${id}`,(err, response, body)=>{
      const json = JSON.parse(body)
      console.log(response.statusCode)
      response.statusCode === 201
      ? resolve(json)
      : reject(err)
    })
  })
}

// getAuthorById('1700').then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })

update = (id, name, last_name, biography, gender, age, is_alive)=>{
  const URI = 'authors/'
  const autorNuevo = {
    name ,
    last_name,
    nacionalidad : 'MX',
    biography,
    gender,
    age,
    is_alive
  }
  const URL = `${URL_BASE}${URI}${id}/`
  return new Promise((resolve,reject)=>{
    request.put({url: URL, form: autorNuevo}, (err, response, body)=>{
        const json = JSON.parse(body)
        console.log(response.statusCode)
        response.statusCode === 200
        ? resolve(json)
        : reject(err)
    });
  });
}

update('1705','paula', 'sanchez', 'dev', 'F','24', 'true').then((res)=>{
    console.log(res)
  }).catch((err)=>{
      console.log(err);
  })
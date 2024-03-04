import library from './library.json'

// let arrClone = Object.keys(library).map(item => item + ' ' + library[item])
let response = library.map(item => <span key={item}>item</span>)

console.log(response)

let footer =  document.querySelector('.footer')
// let url = fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//   .then(response => response.json())
//   .then(commits => ((commits.map(item => footer.append(item.title)))))

function Footer() {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums/1/photos')
  // xhr.responseType = 'json';
  xhr.send()
  xhr.onload = function(){
    // console.log(`Загружено: ${xhr.status} ${xhr.response} `)
  }
  xhr.onerror = function(){alert(`Ошибка соединения`)}
  xhr.onprogress = function(event){
    // console.log(`${event.total}`)
  }

    // (async () => { 
    //   let response = await fetch(url);
    //   let list = await response.json()  
    //   console.log(list[0]) 
    // })(); 

   
 
 
  return (
    <div className="footer">
      <h3 className="footerH3">Подвал документа</h3>
      <p>для удаленного копирования</p>
      {library.map(item=>
        <section key={item} data='sect'>
          <h4 key={item.name}>{item.name}</h4>
          <span key={item.email}>{item.email}</span>
        </section>)}
    </div>
  );
}

export default Footer;


// удалить объект из массива и создать новый массив
 

// вывести пользователей в таблицу
// "albumId": 1,
// "id": 23,
// "title": "harum velit vero totam",
// "url": "https://via.placeholder.com/600/e924e6",
// "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
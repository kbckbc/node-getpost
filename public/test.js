document.getElementById("fetch").onclick = () => {
  let student_name = document.getElementById('fetch_student_name').value;
  let student_num = document.getElementById('fetch_student_num').value;

  // FETCH method
  // The fetch() method starts the process of fetching a resource from a server. 
  // The fetch() method returns a Promise that resolves to a Response object.
  // Promise means you can call a method like this.
  // fetch(file).then(x => x.text()).then(y => myDisplay(y));
  fetch('/fetch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "student_name":student_name,
      "student_num":student_num
    })
  })
  .then(res => {
    console.log('test.js', 'res', res);
    return res.json();
  })
  .then(json => {
    console.log('test.js','json', json);
    document.getElementById('fetch_result').value = json.str;
  })
  .catch(err => console.log( err));
  
};
document.getElementById('clear').onclick = () => {
  document.getElementById('post_student_name').value = '';
  document.getElementById('post_student_num').value = '';
  document.getElementById('fetch_student_name').value = '';
  document.getElementById('fetch_student_num').value = '';
  document.getElementById('fetch_result').value = '';
}
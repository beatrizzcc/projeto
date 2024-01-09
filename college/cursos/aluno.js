function getInfoAluno(){
    
    let inputFullName = document.getElementById('full-name').value;
    let inputEmail = document.getElementById('email').value;
    const inputDate = document.getElementById("date").value;
    const inputCourse = document.getElementById('name-course').value;
    
    const data = [inputFullName, inputEmail, inputDate];
  
   
    if(!inputFullName.length){
      alert('obrigatório nome completo')
      return;
    }else if(!inputEmail.length){
      alert('Obrigatório email')
      return;
    } else if(!inputDate.length){
        alert('Obrigatório email')
        return;
    }else if(!inputCourse.length){
        alert('Obrigatório preencher')
        return;
    }
    
  
    const infoData = localStorage.setItem("matriculas", JSON.stringify(data));
  
    alert("Dados salvos com sucesso!");
    
  
  }
  $(document).ready(function() {
    const savedData = JSON.parse(localStorage.getItem("matriculas"));
  
    if (savedData) {
      $("#full-name").val(savedData[0]);
      $("#email").val(savedData[1]);
      $("#date").val(savedData[2]);
      $("#name-course").val(savedData[3]);
    }
  });
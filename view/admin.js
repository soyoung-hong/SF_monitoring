const template = require('./template');
const navBar = template.navBar();

module.exports.admin = function (navBar,userObj) {
    let users = '';
    let deptList = ['A', 'B', 'C','D','E','F','X'];
    for (user of userObj) {
      var dropdown_html= '';

    //   $('#SpaceAccommodation').change(function () {
    //     var selectedText = $(this).find("option:selected").text(); 선택된 값을 가져올 때는 이 코드 쓰면 댐
    //     $(".test").text(selectedText);
    // });

      for(var i =0; i< deptList.length;i++){
        if(user.deptId === deptList[i]){
          dropdown_html+=`<option selected="selected" value="${user.deptId}">${user.deptId}</option>`; //deptArray안의 값과, user.deptId의 값이 같으면 selected된 option태그가 넘어옴
        }
        else{ 
          dropdown_html+=`<option value="${deptList[i]}">${deptList[i]}</option>` //다를 경우에는 , option에 value값만 있는 게 넘어옴
          }
        }
        console.log(dropdown_html);
        users += `
            <tr>
                <td>${user.uid}</td>
                <td>${user.name}</td>
                <td>
                <select class="form-control" id="SpaceAccommodation" name="YogaSpaceAccommodation">
                ${dropdown_html} 
                </select></td>
                <td>${user.text}</td>
            </tr>`;
    }
    return `
    <!DOCTYPE html>
    <html lang="ko">
    
    <head>
      <title>Bootstrap 4 Website Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    </head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <style>
    
    </style>
    </head>
    
    <body>
      <div class="container">
        <div class="jumbotron text-center" style="margin-bottom:0">
          <h1><i class="fas fa-user"></i> 공장 환경 모니터링 </h1>
        </div>
        <!-- Nav tabs -->
          ${navBar}<br>
          <div class="container">
          <div class="row" style="margin-left: 10px">
          <div class="col-12"><h3>업무 수정</h3></div>
          <div class="col-12"><hr></div>
          <div class="col-12">
              <table class="table table-condensed table-hover">
                  <thead class="thead-light">
                      <tr class="active">
                          <th scope="col">아이디</th>
                          <th scope="col">이름</th>
                          <th scope="col">공정 구역</th>
                          <th scope="col">작업 지시</th>
                      </tr>
                  </thead>
                  <tbody>
                  ${users}
                  </tbody>
              </table>

          </div>

      </div>
      </div>
    </body>
    
    </html>

`;
}
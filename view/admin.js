const template = require('./template');

module.exports.admin = function (navBar,userObj) {
    let users = '';
    for (user of userObj) {
        users += `
            <tr>
                <td>${user.uid}</td>
                <td>${user.name}</td>
                <td>${user.deptId}</td>
                <td>${user.text}</td>
                <td><a href="/user/update/uid/${user.uid}"><i class="fas fa-edit"></i></a>
            </tr>`;
    }
    return `
    <!DOCTYPE html>
    <html lang="ko">
    
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
                          <th scope="col">공정구역</th>
                          <th scope="col">작업지시</th>
                          <th scope="col">수 정</th>
                      </tr>
                  </thead>
                  <tbody>
                  ${users}
                  </tbody>
              </table>
          </div>

    </body>
    
    </html>

`;
}
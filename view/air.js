const template = require('./template');

module.exports.work = function (navBar) {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>FE 공장환경</title>
    <style>
    .fakeimg {
        height: 200px;
        background: #aaa;
    }
</style>
</head>
<body>
    <div class="container">
        <div class="jumbotron text-center" style="margin-bottom:0">
            <h1><i class="fas fa-wind"> 공기질 센서</i></h1>
            
        </div>
        <!-- Nav tabs -->
        ${navBar}
        <!-- part tabs -->
        <div class="container">
          <div class="row" style="margin-left: 10px">
          <div class="col-12"><h3>CS811 회로도</h3></div>
          <div class="col-12"><hr></div>
          <div class="col-12">
              <table class="table table-condensed table-hover">         
                </div>
                <div class="col-4">
                <img src="air.jpg" width="700px‬" alt="logo">
                </div>
                <div class="col-4">
                    
                </div>
            </div>
            <table class="table table-active">
            <thead>
              <tr>
                <th><조치사항></th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>1. 전원 케이블 확인 후 재부팅</td>
              </tr>
              <tr>
                 <td>2. 5V / 그라운드선 확인</td>
              </tr>
              <tr>
                <td>3. 회로도를 확인하여 SCL-5번핀 / SDA - 4번핀 / VCC -3.3V 확인</td>
              </tr>
              <tr>
              <td>4. 부저 고장 시 15번 핀 확인 / 핀 문제 없다면 회로도를 확인하여 부저 교체  </td>
            </tr>
              <tr>
                <td>5. 관리자 문의</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</body>
</html>
`;
}
const template = require('./template');

module.exports.registerUser = function (navBar) {


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

                <div class="row" style="margin-left: 10px">
                    <div class="col-12"><h3>사용자 등록</h3></div>
                    <div class="col-12"><hr></div>
                    <div class="col-2"></div>
                    <div class="col-7">
                        <form action="/user/register" method="POST">
                            <table class="table table-borderless">
                                <tr>
                                    <td>아이디</td>
                                    <td><input type="text" class="form-control" id="uid" name="uid"></td>
                                </tr>
                                <tr>
                                    <td>이름</td>
                                    <td><input type="text" class="form-control" id="name" name="name"></td>
                                </tr>
                                
                                <tr>
                                    <td colspan="2" style="text-align: center;">
                                        <button type="submit" class="btn btn-primary">등록</button>&nbsp;&nbsp;
                                        <button type="reset"" class="btn btn-secondary">취소</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
    </body>
    
    </html>

`;
}
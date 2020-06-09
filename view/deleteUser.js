  
const template = require('./template');

module.exports.deleteUser = function(navBar, user) {
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

            <div class="col-12">
                <div class="row" style="margin-left: 10px">
                    <div class="col-12"><h3>사용자 삭제</h3></div>
                    <div class="col-12"><hr></div>
                    <div class="col-2"></div>
                    <div class="col-4">
                    <form action="/user/delete" class="form-horizontal" method="POST">
                        <input type="hidden" name="uid" value="${user[0].uid}"><br>
                        <p style="text-align: center;">${user[0].uid} 사용자를 삭제하시겠습니까?</p><br>
                        <p style="text-align: center;"><input class="btn btn-primary" type="submit" value="확인">&nbsp;&nbsp;&nbsp;
                            <button class="btn btn-secondary" type="reset" onclick="location.href='/admin'">취소</button></p>
                    </form>
                    </div>
                    <div class="col-6"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}
const template = require('./template');


module.exports.updateUser = function(navBar, user) {

    let deptList = ['A', 'B', 'C','D','E','F','X'];
      var options= '';
      for(var i =0; i< deptList.length;i++){
        if(user[0].deptId === deptList[i]){
            options+=`<option selected="selected" value="${user[0].deptId}">${user[0].deptId}</option>`; //deptArray안의 값과, user.deptId의 값이 같으면 selected된 option태그가 넘어옴
        }
        else{ 
            options+=`<option value="${deptList[i]}">${deptList[i]}</option>` //다를 경우에는 , option에 value값만 있는 게 넘어옴
          }
        }
    return `
    <!DOCTYPE html>
    <html lang="ko">
    
    
    
    <body>
        <div class="container">
            <div class="jumbotron text-center" style="margin-bottom:0">
                <h1><i class="far fa-address-card "> 업무 지시서</i></h1>
            </div>
            <!-- Nav tabs -->
            ${navBar}
            <div class="container">
        <div class="row" style="margin-top: 30px">
    
            <div class="col-10">
                <div class="row" style="margin-left: 10px">
                    <div class="col-12"><h3>사용자 수정</h3></div>
                    <div class="col-12"><hr></div>
                    <div class="col-2"></div>
                    <div class="col-7">
                        <form action="/user/update" method="POST">
                            <input type="hidden" name="uid" value="${user[0].uid}">
                            <table class="table table-borderless">
                                <tr>
                                    <td>아이디</td>
                                    <td>${user[0].uid}</td>
                                </tr>
                               
                                <tr>
                                    <td>이름</td>
                                    <td>${user[0].name}</td>
                                </tr>
                                <tr>
                                    <td>작업 공정</td>
                                    <td>
                                        <select class="form-control" id="deptId" name="deptId">
                                            ${options}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                <td>작업 지시</td>
                                <td><input type="text" class="form-control" name="text" value="${user[0].text}"></td>
                            </tr>
                                <tr>
                                    <td colspan="2" style="text-align: center;">
                                        <button type="submit" class="btn btn-primary">수정</button>&nbsp;&nbsp;
                                        <button type="reset"" class="btn btn-secondary">취소</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}


const template = require('./template');


module.exports.work = function (navBar, user) {
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
            <div class="row">
                <div class="col-4">
                    <h1 class="text-center"><span class="badge badge-pill badge-info">공정구역</span></h1>
                    <hr style="border:solid 2px palevioletred">
                    <img src="/${user[0].deptId}.PNG" width="350px‬" alt="logo">
                </div>
                <div class="col-4">
                    <div class="card bg-info" style="margin-top:50px;">
                        <div class="card-body text-center">
                        <h2 class="card-text">"${user[0].deptId}" 파트구역</h2>

                        
                        <h3 class="card-text"> A : 생산 공정.</h2>
                        <h3 class="card-text"> B : 확장 공정.</h2>
                        <h3 class="card-text"> C : 축소 공정</h2>
                        <h3 class="card-text"> D : 폐기 공정</h2>
                        <h3 class="card-text"> E : 저장 공정</h2>   
                        <h3 class="card-text"> F : 조립 공정</h2>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h1 class="text-center"><span class="badge badge-secondary">지시서</span></h1>
                    <div class="card bg-light">
                        <div class="card-body text-center" style="height: 300px;">
                            <h4 class="card-text">${user[0].text}</h4>
                        </div>
                    </div>
                    </div>
                    
             
                    </div>
                    </div>
    </div>
</body>

</html>
`;
}
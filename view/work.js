const template = require('./template');


module.exports.work = function (navBar) {
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
                    <img src="workplace.PNG" alt="logo">
                </div>
                <div class="col-4">
                    <div class="card bg-info" style="margin-top:200px;">
                        <div class="card-body text-center">
                            <h2 class="card-text">B 공정으로 가세요.</h2>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h1 class="text-center"><span class="badge badge-secondary">지시서</span></h1>
                    <div class="card bg-light">
                        <div class="card-body text-center" style="height: 300px;">
                            <h4 class="card-text">test</h4>
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
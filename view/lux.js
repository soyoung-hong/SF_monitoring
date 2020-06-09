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
            <h1><i class="far fa-lightbulb"> 조도 센서</i></h1>
            
        </div>
        <!-- Nav tabs -->
        ${navBar}
        <!-- part tabs -->
        <div class="container">
          <div class="row" style="margin-left: 10px">
          <div class="col-12"><h3>CDS 회로도</h3></div>
          <div class="col-12"><hr></div>
          <div class="col-12">
              <table class="table table-condensed table-hover">         
                </div>
                <div class="col-4">
                <img src="cds.PNG" width="700,000‬" alt="logo">
                </div>
                <div class="col-4">
                    
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;
}
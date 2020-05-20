const template = require('./template');
const navBar = template.navBar();

module.exports.work = function (navBar) {
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
    .fakeimg {
        height: 200px;
        background: #aaa;
    }

</style>
</head>

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
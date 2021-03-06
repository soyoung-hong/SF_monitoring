module.exports.login = function() {
    return `
    <!DOCTYPE html>
<html lang="ko">

<head>
  <title>FE 공장환경</title>
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

  .total {
    margin-top: 200px;
  }

  .login {
    margin: 20px;
  }
</style>
</head>

<body>
  <div class="container">
    <div class="jumbotron text-center" style="margin-bottom:0">
      <h1><i class="fas fa-user"></i> 로그인</h1>
    </div>
    <!-- Nav tabs -->
    
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="col-md-12">
          <div class="panel panel-success">
            <div class="panel-body">
              <form action="/user/login" class="form-horizontal" method="POST">
                <div class="total">
                  <div class="login">
                    <input type="text" class="form-control" id ="uid" name="usernumber" placeholder="User number" >
                  </div>
                  <div class="login">
                    <button type="submit" value="로그인" class="form-control btn btn-primary">로그인</button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>

</html>
    `;
}
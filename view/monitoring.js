module.exports.monitoring = function() {
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
    
    </style>
    </head>
    
    <body>
      <div class="container">
        <div class="jumbotron text-center" style="margin-bottom:0">
          <h1><i class="fas fa-user"></i> 공장 환경 모니터링 </h1>
        </div>
        <!-- Nav tabs -->
        <nav class="navbar navbar-expand-sm navbar-light bg-faded">
    
          <!-- Brand -->
          <a class="navbar-brand" href="#monitoring">모니터링</a>
    
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#work">업무관리</a>
            </li>
            <!-- Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                센서
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#temp">온도</a>
                <a class="dropdown-item" href="#hum">습도</a>
                <a class="dropdown-item" href="#air">공기질</a>
                <a class="dropdown-item" href="#lx">조도</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <img src="userimg.PNG" alt="logo" style="width:50px;">
              <div class="navbar-text">
                <p class="text-dark">작업자 : _______ </p>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#logout">logout</a>
            </li>
          </ul>
        </nav>
        <div class="container">
            
            <div class="card-deck">
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">온도</span><span style="color:rgb(236, 99, 75)">
                        <i class="fas fa-thermometer-half" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:rgb(8, 224, 152)"><i class="far fa-laugh fa-8x"></i></span><br>
                        <p></p>
                        <h1 class="text-center display-4">24.5°C</h1>
                        
    
    
                </div>
              </div>
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">습도</span><span style="color:rgb(75, 158, 236)">
                        <i class="fas fa-tint" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:red "><i class="far fa-dizzy fa-8x"></i></span>
                        <p></p>
                        <h1 class="text-center display-4">54.0 %</h1>
    
                        
                    </div>
                </div>
                <div class="card bg-light">
                    <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">공기</span><span style="color:rgb(110, 75, 236)">
                        <i class="fab fa-cloudversify" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:red "><i class="far fa-dizzy fa-8x"></i></span>
                        <p></p>
                        <h1 class="text-center display-4">670 ppd</h1>
    
    
                </div>
              </div>
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">조도</span><span style="color:rgb(255, 236, 66)">
                        <i class="far fa-lightbulb" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:rgb(8, 224, 152)"><i class="far fa-laugh fa-8x"></i></span>
                        <p></p>
                        <h1 class="text-center display-4">10 lx</h1>
    
    
                </div>
              </div>  
            </div>
          </div>
    </body>
    
    </html>

`;
}
module.exports = {
    navBar: function(name, uid) {
      console.log(uid);
        return `
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
        <nav class="navbar navbar-expand-sm navbar-light bg-faded">

        <!-- Brand -->
        <a class="navbar-brand" href="/work/uid/${uid}">작입지시</a>
  
        <!-- Links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/monitoring">모니터링</a>
          </li>
          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              센서
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/temp">온습도</a>
              <a class="dropdown-item" href="/air">공기질</a>
              <a class="dropdown-item" href="/lux">조도</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              작업자
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/admin">작업 지시</a>
              <a class="dropdown-item" href="/user/register">작업자 등록</a>

            </div>
          </li>

        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <img src="/userimg.PNG" alt="logo" style="width:50px;">
            <div class="navbar-text">
              <p class="text-dark">작업자 : ${name} </p>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/user/logout">logout</a>
          </li>
        </ul>
      </nav>
        `;
    }
}
module.exports = {
    navBar: function(name) {
        return `
        <nav class="navbar navbar-expand-sm navbar-light bg-faded">

        <!-- Brand -->
        <a class="navbar-brand" href="/monitoring">모니터링</a>
  
        <!-- Links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/work">업무관리</a>
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
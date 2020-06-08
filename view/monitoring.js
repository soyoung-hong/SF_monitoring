const template = require('./template');


module.exports.monitoring = function(navBar, sensor) {
  
  
	return `
    <!DOCTYPE html>
    <html lang="ko">
    
   
    
    <body>
      <div class="container">
        <div class="jumbotron text-center" style="margin-bottom:0">
          <h1><i class="fas fa-user"></i> 공장 환경 모니터링 </h1>
        </div>
        <!-- Nav tabs -->
          ${navBar}
        <div class="container">
            
            <div class="card-deck">
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">온도</span><span style="color:rgb(236, 99, 75)">
                        
                    <i class="fas fa-thermometer-half" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:rgb(8, 224, 152)"><i class="far fa-laugh fa-8x"></i></span><br>
                        <p></p>
                        <h1 class="text-center display-4">${sensor[0].temperature}°C</h1>
                        
    
    
                </div>
              </div>
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">습도</span><span style="color:rgb(75, 158, 236)">
                        <i class="fas fa-tint" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:red "><i class="far fa-dizzy fa-8x"></i></span>
                        <p></p>
                        <h1 class="text-center display-4">${sensor[0].humidity}%</h1>
    
                        
                    </div>
                </div>
                <div class="card bg-light">
                    <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">공기</span><span style="color:rgb(110, 75, 236)">
                        <i class="fab fa-cloudversify" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:red "><i class="far fa-dizzy fa-8x"></i></span>
                        <p></p>
                        <h1 class="text-center display-4">${sensor[0].air} ppd</h1>
    
    
                </div>
              </div>
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">조도</span><span style="color:rgb(255, 236, 66)">
                        <i class="far fa-lightbulb" aria-hidden="true"></i></span></h1><br>
                        <span class="face" style="color:rgb(8, 224, 152)"><i class="far fa-laugh fa-8x"></i></span>
                        <p></p>
                        <h1 class="text-center display-4">${sensor[0].illuminance} lx</h1>
    
    
                </div>
              </div>  
            </div>
          </div>
    </body>
    
    </html>

`;
}
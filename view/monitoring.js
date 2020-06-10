const template = require('./template');

const TEMP_LOW = 22.0;
const TEMP_HIGH = 28.0;
const HUMID_LOW = 40.0;
const HUMID_HIGH = 60.0;
const CDS_LOW = 500;
const CDS_HIGH = 800;
const AIR_LOW = 10.0;
const AIR_HIGH = 30.0;

const good = `<span style="color:rgb(8, 224, 152)"><i class="far fa-grin-hearts fa-8x"></i></span>`;
const up = `<span style="color:red"><i class="fas fa-angle-double-up fa-8x"></i></span>`;
const down = `<span style="color:blue"><i class="fas fa-angle-double-down fa-8x"></i></span>`;
  
module.exports.monitoring = function(navBar, sensor) {
  let temp = sensor[0].temperature;
  let humid = sensor[0].humidity;
  let cds = sensor[0].illuminance;
  let air = sensor[0].air;


  let tempSign, humidSign, cdsSign, airSign;
  if (temp > TEMP_HIGH) tempSign = up;
  else if (temp < TEMP_LOW) tempSign = down;
  else tempSign = good;
  if (humid > HUMID_HIGH) humidSign = up;
  else if (humid < HUMID_LOW) humidSign = down;
  else humidSign = good;
  if (cds > CDS_HIGH) cdsSign = up;
  else if (cds < CDS_LOW) cdsSign = down;
  else cdsSign = good;
  if (air > AIR_HIGH) airSign = up;
  else if (air < AIR_LOW) airSign = down;
  else airSign = good;
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
                        <i class="fas fa-thermometer-half" aria-hidden="true"></i>
                    </span></h1><br>
                        ${tempSign}<br>
                        <p></p>
                        <h1 class="text-center display-4">${sensor[0].temperature}°C</h1>
                </div>
              </div>
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">습도</span><span style="color:rgb(75, 158, 236)">
                        <i class="fas fa-tint" aria-hidden="true"></i></span></h1><br>
                        ${humidSign}</i></span>
                        <p></p>
                        <h1 class="text-center display-4">${sensor[0].humidity}%</h1>
    
                        
                    </div>
                </div>
                <div class="card bg-light">
                    <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">공기</span><span style="color:rgb(110, 75, 236)">
                        <i class="fab fa-cloudversify" aria-hidden="true"></i></span></h1><br>
                       ${airSign}</i></span>
                        <p></p>
                        <h1 class="text-center display-4">${sensor[0].air} ppd</h1>
    
    
                </div>
              </div>
              <div class="card bg-light">
                <div class="card-body text-center">
                    <h1><span class="badge badge-secondary">조도</span><span style="color:rgb(255, 236, 66)">
                        <i class="far fa-lightbulb" aria-hidden="true"></i></span></h1><br>
                        ${cdsSign}</i></span>
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
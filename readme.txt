simpleform;

npm install --save bootstrap jquery
in angular.json file, add followings
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

 then you are good to go..


 app.modoule.ts dosyasina asagidakini ekle
 import {FormsModule} from '@angular/forms';
 sonra import et..



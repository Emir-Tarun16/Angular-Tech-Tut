import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";  
//platform-browser-dynamic is use for showing our application on the browser 

import { AppModule } from "./app/app.module";


platformBrowserDynamic().bootstrapModule(AppModule)
//bootstrapModule is use to First load up the file first after the loading of the application
 

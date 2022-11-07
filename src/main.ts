import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import {SagaDBConnectionService} from "./utilities/types/SagaDBConnection";
import {SagaFSHandlerService} from "./utilities/types/SagaFSHandler";
import {AppModule} from "./app/app.module";



if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


declare global{
  var db_connection: SagaDBConnectionService;
  var fs_handler: SagaFSHandlerService;
}
globalThis.db_connection = new SagaDBConnectionService();
globalThis.fs_handler = new SagaFSHandlerService();

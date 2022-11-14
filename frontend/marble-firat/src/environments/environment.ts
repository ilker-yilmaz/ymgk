// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthModule} from '@auth0/auth0-angular';


export const environment = {
  production: false,
  API_URL_AUTH0_DOMAIN:"ilker-blog.us.auth0.com",
  API_URL_AUTH0_CLIENT_ID:"LzyqXLpMqz35iZXhNLWtXnWieVjKerJD",
   
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

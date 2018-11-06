// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: 'AIzaSyAgqy9V6q1_xT-ETCVpyA-CJNgiMjVmZ_8',
    authDomain: 'ng6simple-chat.firebaseapp.com',
    databaseURL: 'https://ng6simple-chat.firebaseio.com',
    projectId: 'ng6simple-chat',
    storageBucket: 'ng6simple-chat.appspot.com',
    messagingSenderId: '1097291188079'

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

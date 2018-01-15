// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  config: {
    apiKey: "AIzaSyDyf85V0wkLyAvClgS0Yr8SKDKRVr38vZE",
    authDomain: "angular5-firebase-tutorial.firebaseapp.com",
    databaseURL: "https://angular5-firebase-tutorial.firebaseio.com",
    projectId: "angular5-firebase-tutorial",
    storageBucket: "angular5-firebase-tutorial.appspot.com",
    messagingSenderId: "62065562724"
  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: 'e819afd0-7dbc-4f61-a69c-e3eeac285fed',
      authority:
        'https://login.microsoftonline.com/cbe429ed-b464-4225-bc6b-f7187cf2093c',
    },
  },
  apiConfig: {
    scopes: ['api://1a5c3969-c7b4-46d8-993e-5ee1f8b1502c/access_as_user'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

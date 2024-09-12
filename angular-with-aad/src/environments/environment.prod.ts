export const environment = {
  production: true,
  msalConfig: {
    auth: {
      clientId: 'e819afd0-7dbc-4f61-a69c-e3eeac285fed',
      authority:
        'https://login.microsoftonline.com/cbe429ed-b464-4225-bc6b-f7187cf2093c',
    },
  },
  apiConfig: {
    scopes: ['api://1a5c3969-c7b4-46d8-993e-5ee1f8b1502c/access_as_user'],
    uri: 'api://1a5c3969-c7b4-46d8-993e-5ee1f8b1502c',
  },
};

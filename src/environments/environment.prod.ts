// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  showVersion: true,
  version:'2.9.2',
  api:{
    version:'v2.0',
    url:'',
  },
  errors:{
    enabled:true,
  },
  logger:{
    buffer:{
      time: 0,
      limit: 10,
      encrypt: false,
      level: 'INFO',
    },
    console: true,
  },
  codes: {
    refreshInHour: 24,
  },
  configutation:{
    localStorage:false,

  },
  security:{
    token:{
       pooling:false,
    },
    cookies:{
       endpoint:'https://api-glbk.liberbank.es/externo/produccion/onboarding/oauth2/token',
       clientId:'L7lT8fH8eA4vS2tX5pF2dJ1eA3sJ8yE7qE0jF3hM0sB5jX8sF1',
       clientSecret:'a256e3a9-c011-4030-83d9-82da8d3a1bd9',
       grantType:'client_credentials',
       scope:'create read update',
    },
  },
  monitorization:{
    performance:true,
  },
  fingerprint:{
      enabled:true,
  },
  tf:{
      app:'lqv',
  },
  protocol: 'https',
  host: 'api.digitalonboarding.es',
  port: '443',
  new_flow_path: 'new',
  init_flow_path: 'new_device',
  upload_path: 'upload',
  upload_check_path: 'uploadcheckdoc',
  webrtc_default_turn_server: 'turn:api.digitalonboarding.es:3479',
  webrtc_default_turn_server_user: 'u',
  webrtc_default_turn_server_pass: 'p',
  webrtc_default_stun_server: 'stun:stun.l.google.com:19302',
  api_key: 'bff31040-4da9-34ab-accc-ceac47c58885',
  api_ext: {
    url: '',
    ext: 'externo/produccion',
    otp: '5024',
    generic_port: '',
  },
  live_agent: {
    chatID: '5730N0000004XsH',
    orgID: '00D0N000001MTGC',
    deploymentID: '5720N0000004XcT',
    urlChat: '',
  },
};

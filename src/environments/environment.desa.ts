// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  showVersion: true,
  version:'',
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
       endpoint:'',
       clientId:'98f5e367-5bae-45df-a109-e914aff56cdf',
       clientSecret:'qS4gE4kY6jY1vJ4fI0rO0eA8gP6jB8gW3mH3yE7bG2wF6hV5cF',
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
      app:'',
  },
  protocol: 'https',
  host: 'des.digitalonboarding.es',
  port: '443',
  context_path: 'dob-api/transaction',
  new_flow_path: 'new',
  init_flow_path: 'new_device',
  upload_path: 'upload',
  upload_check_path: 'uploadcheckdoc',
  webrtc_server: 'https://des.digitalonboarding.es/dob-video-test',
  webrtc_turn_request_url: 'https://des.digitalonboarding.es/dob-video-test',
  webrtc_default_turn_server: 'turn:185.76.212.161:3478',
  webrtc_default_turn_server_user: 'u',
  webrtc_default_turn_server_pass: 'p',
  webrtc_default_stun_server: 'stun:stun.l.google.com:19302',
  api_key: 'bff31040-4da9-34ab-accc-ceac47c58885',
  user_sdk: 'liberbank',
  api_ext: {
    url: '',
    ext: '',
    otp: '5024',
    generic_port: '473',
  },
  live_agent: {
    chatID: '5739E000000Cbd0',
    orgID: '00D9E0000001CRX',
    deploymentID: '5729E0000008OdI',
    urlChat: '',
  },
};

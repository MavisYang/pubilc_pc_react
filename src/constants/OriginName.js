//eslint-disable-next-line
/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
export const API_PATH =  window.location.origin.includes('localhost') ? 'https://gpetdev.gemii.cc'
    : window.location.origin.includes('gpetdev') ? 'https://gpetdev.gemii.cc'
        : window.location.origin.includes('gpetprd') ? 'https://gpetprd.gemii.cc'
            : 'https://gpetprd.gemii.cc'
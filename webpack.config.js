import path from 'path';

export default {
    mode: 'development',
    entry: {
        map: './sources/js/modules/map.js',
        recoverPassword: './sources/js/modules/recover-password.js',
        resendCode: './sources/js/modules/resend-code.js',
        dropZone: './sources/js/modules/drop-zone.js',
        general: './sources/js/general.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}
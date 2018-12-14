import React from 'react'
import {login_get_token} from '../funStore/CommonPort'
import {saveCookie,getCookie,deleteCookie} from './CommonFun'

class AuthProvider {
    onLogin(unionid) {
        const self = this
        return login_get_token({union_id:unionid}).then(res => {
            const data = res
            self.saveTokens(data.access_token, data.refresh_token)
            return data
        }).catch((reject) => {
            return 'error'
        })
    }


    onRefreshToken() {
        const unionid = getCookie('unionId_gpet')
        deleteCookie('access_token_gpet')
        deleteCookie('refresh_token_gpet')
        if(unionid){
            this.onLogin(unionid)
        }
    }

    saveTokens(access_token, refresh_token) {
        saveCookie('access_token_gpet',access_token)
        saveCookie('refresh_token_gpet',refresh_token)
    }
}

export default new AuthProvider()

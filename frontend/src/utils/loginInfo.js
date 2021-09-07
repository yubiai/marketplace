export function saveLoginInfo (token, wallet, profileInfo={}) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('wallet', wallet);
    sessionStorage.setItem('profileInfo', JSON.stringify(profileInfo));
}

export function getLoginInfo() {
    return {
        jwtToken: sessionStorage.getItem('token'),
        savedWallet: sessionStorage.getItem('wallet'),
        profileData: JSON.parse(sessionStorage.getItem('profileInfo'))
    }
}

export function removeLoginInfo() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('wallet');
    sessionStorage.removeItem('profileInfo');
}
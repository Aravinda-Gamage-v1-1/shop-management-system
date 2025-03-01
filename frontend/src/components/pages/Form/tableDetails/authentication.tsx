
export const isAuthenticated = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token || isTokenExpired(token)) {
       /* alert("token expired")*/
    }

    return !!localStorage.getItem('accessToken');
}

function isTokenExpired(token:any) {
    const jwtPayload = JSON.parse(atob(token.split('.')[1]));
    const expiryTime = jwtPayload.exp * 1000;
    return Date.now() >= expiryTime;
}

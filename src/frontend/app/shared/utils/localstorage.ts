export class LocalStorageUtils {
    public getUserToken() {
        return JSON.parse(localStorage.getItem('X-CSRFTOKEN'));
    }

    public saveUserToken(string: string) {
        localStorage.setItem('X-CSRFTOKEN', string);
    }

    public limparInfosLocais() {
        localStorage.removeItem('item_name');
    }

    public salvarInfo(string: string) {
        localStorage.setItem('item_name', string);
    }

    public saveLocalUserData(response: any) {
        console.log('RESPONSE');
        console.log(response);
        this.saveUserToken(response.accessToken);
    }

    public usuarioLogado() {
        if (localStorage.getItem('X-CSRFTOKEN'))
            return true;
        return false;
    }
}

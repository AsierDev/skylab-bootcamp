/*  a) Crear una caja que contenga un secreto y solo se revele con la contraseña adecuada 
    b) Para cambiar el secreto debemos introducir la contraseña correcta, si no da error
    c) podemos cambiar la contraseña introduciendo la nueva contraseña y la correcta antigua
    
*/



function Box(secret, password) {
    this.getSecret = function(psw) {
        if (psw === password) return secret;
    }
    this.setSecret = function (sec, psw) {
        if (sec && psw === password) {
            secret = sec;
            return "secreto cambiado";
        }
    }
    this.changePassword = function (newPassword, oldPassword) {
        if (password === oldPassword) {
            password = newPassword;
            return "contraseña cambiada";
        }
    }
}

var box = new Box("A veces miro en stackoverflow... ", "MiPassword");
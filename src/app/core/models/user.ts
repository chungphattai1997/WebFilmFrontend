export class User {
    username;
    password;
    fullname;
    address;
    email;
    phone;
    is_admin: boolean;
    constructor(username, password, fullname, address, email, phone, is_admin: boolean) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.is_admin = is_admin;
    }
}
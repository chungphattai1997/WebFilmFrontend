export class user {
    mId: number;
    mUsername: string;
    mPassword: string;
    mFullname: string;
    mAddress: string;
    mEmail: string;
    mPhone: number;
    mIs_admin: boolean;

    constructor(id: number, username: string, password: string, fullname: string, address: string, email: string, phone: number, is_admin: boolean) {
        this.mId = id;
        this.mUsername = username;
        this.mPassword = password;
        this.mFullname = fullname;
        this.mAddress = address;
        this.mEmail = email;
        this.mPhone = phone;
        this.mIs_admin = is_admin;
    }
}
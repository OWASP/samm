export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    roles: string[];
    password: string;
    mobile: number;
    role: string;

    constructor(name: string, username: string, email: string, password: string, mobile: number,role: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.role = role;
        this.roles = ['user'];
    }
}

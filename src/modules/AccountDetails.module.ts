export class UserAccountDetails {

    public id!: number;
    public username!: string;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public hashedPassword!: string;
    public middleInitial?: string;

    constructor(data: Partial<UserAccountDetails>) {
        Object.assign(this, data);
    }

    get fullName(): string {
        const middle = this.middleInitial ? `${this.middleInitial}. ` : "";
        return `${this.firstName} ${middle}${this.lastName}`;
    }
}

export class UserPassword {
    plainPassword: string;

    constructor(plainPassword: string) {
        this.plainPassword = plainPassword;
    }
}
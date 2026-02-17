export class UserAccountDetails {
    constructor(
        public _id: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public hashedPassword: string,
        public middleInitial?: string,
    ) { }

    get fullName(): string {
        const middle = this.middleInitial ? this.middleInitial : "";
        return `${this.firstName} ${middle}. ${this.lastName}`;
    }
}

export type partialUserDetails = Partial<UserAccountDetails>;
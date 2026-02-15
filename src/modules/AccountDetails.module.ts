export class userAccountDetails {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public firstName: string,
        public lastName: string,
        public hashedPassword: string,
        public middleInitial?: string
    ) { }

    get fullName(): string {
        const middle = this.middleInitial ? `${this.middleInitial}.` : "";
        return `${this.firstName} ${middle} ${this.lastName}`;
    }
}
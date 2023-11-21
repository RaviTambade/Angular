export class Address {
  constructor(
    public id: number,
    public userId: number,
    public area: string,
    public landMark: string,
    public city: string,
    public state: string,
    public pinCode: string,
    public name: string,
    public contactNumber: string,
    public addressType: string
  ) {}
}

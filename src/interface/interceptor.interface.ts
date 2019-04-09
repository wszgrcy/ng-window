export enum ValueType {
    boolean = 0b0001,
    number = 0b0010,
    string = 0b0100,
    regexp = 0b1000
}
export enum ChangeType {
    create, update, delete
}
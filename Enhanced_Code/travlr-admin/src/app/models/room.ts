export interface Room {
    _id: string, // internal MongoDB primary key
    code: string,
    name: string,
    rate: string,
    image: string,
    description: string
}
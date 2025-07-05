export default interface IBook {
    author: string
    available: boolean
    copies: number
    createdAt: Date
    description: string
    genre: string
    isbn: string
    title: string
    updatedAt: Date
    _id: string
}

export interface IBorrow {
    book: string
    dueDate: number,
    totalQuantity: number
}



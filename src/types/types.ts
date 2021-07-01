export interface IRoute {
    id: string
    name: string
    opened: boolean
    selected: boolean
    date: [number, number]
}

export interface IRootState {
    lang: string
    routes: IRoute[]
    processing: boolean
    languages: string[]
}

// interface para trabalhar com interfaces abstratas

export interface IHttp{
    get<T>(url:string) : Promise<T>
}
export interface IArticle{
    articleId : number
    title : string,
    description : string,
    categoryName : string,
    categoryId : number,
}

export interface ICreateArticle{
    title : string,
    description : string,
    categoryId : number,
}

export class CreateArticle implements ICreateArticle{
    title!: string
    description!: string
    categoryId!: number

}

export interface IUpdateArticle{
    articleId : number
    title : string,
    description : string,
    categoryId : number,
}

export class UpdateArticle implements IUpdateArticle{
    articleId!: number
    title!: string
    description!: string
    categoryId!: number

}

export interface INewsResponse {
    articles : IArticle[],
    prevPageLink : string,
    nextPageLink : string
}

export interface IApiRespone{
    isSuccess : boolean,
    statusCode : number,
    data : INewsResponse,
    errors : Errors
}

export interface Errors{
    errorDescription : string[]
}


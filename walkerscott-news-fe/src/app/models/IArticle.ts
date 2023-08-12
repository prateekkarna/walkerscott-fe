export interface IArticle{
    articleId : number
    title : string,
    description : string,
    categoryName : string,
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


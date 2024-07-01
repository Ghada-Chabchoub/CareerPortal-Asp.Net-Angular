export interface UpdateOfferRequest {
    title: string | undefined,
    location : string | undefined,
    min_salary : string | undefined,
    max_salary  : string | undefined,
    imageurl  : string | undefined,
    category  : string | undefined,
    job_nature  : string | undefined,
    job_location  : string | undefined,
    company_name  : string | undefined,
    description  : string | undefined,
    visible : boolean | undefined,
    archivee : boolean | undefined,
    author : string | undefined,  
    publishDate : Date | undefined,
    updateDate : Date | undefined,
}
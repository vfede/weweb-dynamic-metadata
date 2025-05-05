export const config = {
    domainSource: "https://048b637a-1f03-4744-8df9-683da1a67780.weweb-preview.io", // Your WeWeb app preview link
    patterns: [
        {
            pattern: "/provider/[^/]+",
            metaDataEndpoint: "https://lccdbeogxyozaxntzhqe.supabase.co/functions/v1/getMetaProvider/{slug}"
        },
        {
            pattern: "/experience/[^/]+",
            metaDataEndpoint: "https://lccdbeogxyozaxntzhqe.supabase.co/functions/v1/getMetaExperience/{slug}"
        }
        // Add more patterns and their metadata endpoints as needed
    ]
};

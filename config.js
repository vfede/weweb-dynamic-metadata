export const config = {
  domainSource: "https://048b637a-1f03-4744-8df9-683da1a67780.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/provider/[^/]+",
          metaDataEndpoint: "https://gist.githubusercontent.com/vfede/408bbc3b2ea4f3b5524e8f834b125d49/raw/d30292d6be8f045cd7db23ab39fd7ab79aa5780a/gistfile1.txt?{id}"
      },
      {
          pattern: "/experience/[^/]+",
          metaDataEndpoint: "https://gist.githubusercontent.com/vfede/408bbc3b2ea4f3b5524e8f834b125d49/raw/d30292d6be8f045cd7db23ab39fd7ab79aa5780a/gistfile1.txt?{id}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};

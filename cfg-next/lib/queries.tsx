export const articlesQuery = `query QueryArticles {
    posts {
      title,    
      publishDate,
      author {
        id,
        name
      }
      status
      id
    }
  }`
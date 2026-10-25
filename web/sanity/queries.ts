// Store GROQ queries

export const gameQuery = `
*[_type == "game"]{
    _id,
    title,
    thumbnail,
    "slug": slug.current,
    description,
  }
`;
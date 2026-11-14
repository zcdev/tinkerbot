// Store GROQ queries

export const gameQuery = `
*[_type == "game"]{
    _id,
    title,
    thumbnail,
    hero,
    "slug": slug.current,
    description,
    skills,
    tagline,
    story
  }
`;

export const homeQuery = `
*[_type == "home"][0]
`;
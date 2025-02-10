import AuthorsData from "../authors.yaml"

export type Author = {
  name: string
  bio: string
  image?: string
}

export const Authors = (name: string): Author => {
  const author = AuthorsData.find((author: Author) => author.name === name);
  if(!author) {
    return {
      name: 'Unknown',
      bio: '',
    }
  }

  return author;
}
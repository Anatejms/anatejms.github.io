import ConfigData from "../../config.yaml"

export type Author = {
  name: string
  bio: string
  image?: string
}

export type SocialLinks = {
  facebook?: string
  x?: string
  instagram?: string
  linkedin?: string
}

export type Category = {
  name: string
  description: string
}

export const getAuthor = (name: string): Author => {
  const author = ConfigData.authors.find((author: Author) => author.name === name);
  if(!author) {
    // #TODO throw build error
    return {
      name: 'Unknown',
      bio: '',
    }
  }

  return author;
}

export const getCategory = (name: string): Category => {
  const category = ConfigData.categories.find((category: Category) => category.name === name);
  if(!category) {
    // #TODO throw build error
    return {
      name: 'Unknown',
      description: '',
    }
  }

  return category;
}

export const getSocialLinks = (): SocialLinks => {
  return ConfigData.socialLinks;
}

export const getBlogName = (): string => {
  return ConfigData.name;
}

export const getEmail = (): string => {
  return ConfigData.email;
}

export const getAddress = (): string => {
  return ConfigData.address;
}
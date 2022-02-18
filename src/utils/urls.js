export const API_URL = "http://localhost:1337"

/**
 * Given any image return the url
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl = image => {
  if (!image) {
    return "/favicon-32x32.png"
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`
  }

  return image.url
}

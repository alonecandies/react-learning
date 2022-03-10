import { v4 as uuidv4 } from 'uuid'
import getRandomImageUrl from 'utils/getRandomImageUrl'

export function initializePhoto() {
  let photos = []
  for (let i = 0; i < 10; i++) {
    photos.push({
      id: uuidv4(),
      category: Math.floor(Math.random() * 4 + 1),
      title: `Photo ${i}`,
      photo: getRandomImageUrl(),
    })
  }
  return photos
}

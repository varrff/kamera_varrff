import sql from '~/config/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const imageId = body.imageId
  const data = await sql`
  SELECT
    Likes.LikeID,
    Likes.LikeCount,
    Likes.PictureID,
    kamera_image.*
FROM
    public.Likes
INNER JOIN public.kamera_image ON Likes.PictureID = kamera_image.id
WHERE
    kamera_image.id = ${imageId};
    `
    return data
  if (data.length == 0) {
    return data.length 
  }

  let likeCountSum = 0
  data.forEach(item => {
    item += item.likecount
  });
  likeCountSum = likeCountSum / data.length
  return likeCountSum
})

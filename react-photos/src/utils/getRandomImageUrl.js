const getRandomImageUrl = () => {
   const randomId = Math.floor(Math.random() * 2000);
   const randomImageUrl = `https://picsum.photos/id/${randomId}/300/300`;
   return randomImageUrl;
}

export default getRandomImageUrl;
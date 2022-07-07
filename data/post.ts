import { USERS } from "./USERS";

export const POSTS = [
  {
    imageURL: require("../assets/imageURL/PostImageSelf.jpg"),
    user: USERS[0].user,
    likes: 10000,
    caption:
      "Will decentralized trust and ownership accomplish the rejection of poverty? . l challenge this.",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "elonMusk",
        comment: "Go to the moon...🚀",
      },
    ],
  },
  {
    imageURL: require("../assets/imageURL/elonmusk.jpg"),
    user: USERS[1].user,
    likes: 300,
    caption: "Train Ride to Hogwarts",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "mixed_nuts_nuts",
        comment: "I adore you...🚀",
      },
    ],
  },
];

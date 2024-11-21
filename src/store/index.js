import { createStore } from "vuex";

export default createStore({
  strict: true,
    state: {
            posts: [
              {
                  profilePic: "@/assets/male-icon.png",
                  authorName: "GallantWorm",
                  postDate: "September 26, 2024 20:33:14",
                  postImg: "@/assets/tartu2024.png",
                  postText: "I love Tartu 2024"
              },
              {
                  profilePic: "@/assets/woman-avatar-icon.png",
                  authorName: "Casey2013",
                  postDate: "September 25, 2024 18:33:44",
                  postText: "I'm learning javascript"
              },
              {
                  profilePic: "@/assets/woman-avatar-icon.png",
                  authorName: "Casey2013",
                  postDate: "September 25, 2024 18:33:14",
                  postText: "I'm learning HTML"
              },
              {
                  profilePic: "@/assets/woman-avatar-icon.png",
                  authorName: "Casey2013",
                  postDate: "September 25, 2024 17:33:14",
                  postText: "I'm learning"
              },
              {
                  profilePic: "@/assets/male-icon.png",
                  authorName: "Tester394876",
                  postDate: "September 24, 2024 18:32:14",
                  postImg: "@/assets/thumbs-up-black-icon.svg",
                  postText: "Huge thumbs up SVG"
              },
              {
                  profilePic: "@/assets/woman-avatar-icon.png",
                  authorName: "Casey2013",
                  postDate: "September 24, 2024 11:33:14",
                  postText: "Hello world!"
              },
              {
                  profilePic: "@/assets/male-icon.png",
                  authorName: "GallantWorm",
                  postDate: "September 24, 2024 00:33:00",
                  postText: "Had a really bad apple today"
              },
              {
                  profilePic: "@/assets/male-icon.png",
                  authorName: "80IsNotOld",
                  postDate: "September 23, 2024 18:38:38",
                  postText: "Here is my credit card info, as you requested: 3485694857620098 09/99 666"
              },
              {
                  profilePic: "@/assets/male-icon.png",
                  authorName: "BrutalMan99",
                  postDate: "September 23, 2024 23:34:20",
                  postText: "Oops how do I delete that"
              },
              {
                  profilePic: "@/assets/male-icon.png",
                  authorName: "BrutalMan99",
                  postDate: "September 23, 2024 23:33:33",
                  postText: "my little pony watch online for free"
              },
              {
                  profilePic: "@/assets/male-icon.png",
                  authorName: "TimeTraveler",
                  postDate: "June 01, 1020 00:22:13",
                  postText: "When am I???"
              }
          ]
    },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

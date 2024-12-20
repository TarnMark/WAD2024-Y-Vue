import { createStore } from "vuex";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
    // strict: true,
    // state: {
    //     posts: [
    //         {
    //             id: 1,
    //             profilePic: require("@/assets/male-icon.png"),
    //             authorName: "GallantWorm",
    //             postDate: "September 26, 2024 20:33:14",
    //             postImg: require("@/assets/tartu2024.png"),
    //             postText: "I love Tartu 2024",
    //             likes: 0,
    //         },
    //         {
    //             id: 2,
    //             profilePic: require("@/assets/woman-avatar-icon.png"),
    //             authorName: "Casey2013",
    //             postDate: "September 25, 2024 18:33:44",
    //             postText: "I'm learning javascript",
    //             likes: 0,
    //         },
    //         {
    //             id: 3,
    //             profilePic: require("@/assets/woman-avatar-icon.png"),
    //             authorName: "Casey2013",
    //             postDate: "September 25, 2024 18:33:14",
    //             postText: "I'm learning HTML",
    //             likes: 0,
    //         },
    //         {
    //             id: 4,
    //             profilePic: require("@/assets/woman-avatar-icon.png"),
    //             authorName: "Casey2013",
    //             postDate: "September 25, 2024 17:33:14",
    //             postText: "I'm learning",
    //             likes: 0,
    //         },
    //         {
    //             id: 5,
    //             profilePic: require("@/assets/male-icon.png"),
    //             authorName: "Tester394876",
    //             postDate: "September 24, 2024 18:32:14",
    //             postImg: require("@/assets/thumbs-up-black-icon.svg"),
    //             postText: "Huge thumbs up SVG",
    //             likes: 0,
    //         },
    //         {
    //             id: 6,
    //             profilePic: require("@/assets/woman-avatar-icon.png"),
    //             authorName: "Casey2013",
    //             postDate: "September 24, 2024 11:33:14",
    //             postText: "Hello world!",
    //             likes: 0,
    //         },
    //         {
    //             id: 7,
    //             profilePic: require("@/assets/male-icon.png"),
    //             authorName: "GallantWorm",
    //             postDate: "September 24, 2024 00:33:00",
    //             postText: "Had a really bad apple today",
    //             likes: 0,
    //         },
    //         {
    //             id: 8,
    //             profilePic: require("@/assets/male-icon.png"),
    //             authorName: "80IsNotOld",
    //             postDate: "September 23, 2024 18:38:38",
    //             postText: "Here is my credit card info, as you requested: 3485694857620098 09/99 666",
    //             likes: 0,
    //         },
    //         {
    //             id: 9,
    //             profilePic: require("@/assets/male-icon.png"),
    //             authorName: "BrutalMan99",
    //             postDate: "September 23, 2024 23:34:20",
    //             postText: "Oops how do I delete that",
    //             likes: 0,
    //         },
    //         {
    //             id: 10,
    //             profilePic: require("@/assets/male-icon.png"),
    //             authorName: "BrutalMan99",
    //             postDate: "September 23, 2024 23:33:33",
    //             postText: "sdkjfghi",
    //             likes: 0,
    //         },
    //         {
    //             id: 11,
    //             profilePic: require("@/assets/male-icon.png"),
    //             authorName: "TimeTraveler",
    //             postDate: "June 01, 1020 00:22:13",
    //             postText: "When am I???",
    //             likes: 0,
    //         }
    //     ]
    // },
    
    // getters: {},
    // mutations: {
    //     resetLikes(state) {
    //         for (const post of state.posts) {
    //             post.likes = 0;
    //         }
    //         localStorage.removeItem('likes');
    //     },
    //     incrementLikes(state, post) {
    //         post.likes += 1;
    
    //         const savedLikes = state.posts.map(p => ({
    //             id: p.id,
    //             likes: p.likes
    //         }));
    //         localStorage.setItem('likes', JSON.stringify(savedLikes));
    //     },
    //     loadLikes(state) {
    //         const savedLikes = JSON.parse(localStorage.getItem('likes'));
    
    //         if (savedLikes) {
    //             state.posts.forEach(post => {
    //                 const savedPost = savedLikes.find(p => p.id === post.id);
    //                 if (savedPost) {
    //                     post.likes = savedPost.likes;
    //                 }
    //             });
    //         }
    //     }
    // },
    // actions: {
    //     resetLikes(context) {
    //         context.commit('resetLikes');
    //     },
    //     incrementLikes(context, post) {
    //         context.commit('incrementLikes', post);
    //     },
    //     loadLikes(context) {
    //         context.commit('loadLikes');
    //     }
    // },
    // modules: {}
});

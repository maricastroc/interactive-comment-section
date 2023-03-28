import {useState} from "react";
import {Post, PostType} from "./components/Post";
import "./global.css";

import ramsesImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoImg from "./images/avatars/image-juliusomo.png";
import amyImg from "./images/avatars/image-amyrobson.png";
import maxImg from "./images/avatars/image-maxblagun.png";

const reply1Comment2 = {
    username: {
        avatarUrl: ramsesImg,
        name: "ramsesmiron"
    },
    replyTo: "@maxblagun",
    content:
        "I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    publishedAt: new Date("2023-03-24 23:20:12"),
    replies: [],
    isReplyOfAComment: true,
    isFromAuthor: false
};

const reply2Comment2 = {
    username: {
        avatarUrl: juliusomoImg,
        name: "juliusomo"
    },
    replyTo: "@maxblagun",
    content:
        "If I can give you a suggestion, I know some tutorials available on YouTube and some online courses at a very affordable price that can give you a good introduction to React!",
    publishedAt: new Date("2023-03-25 07:40:12"),
    replies: [],
    isReplyOfAComment: true,
    isFromAuthor: false
};

const reply1Comment1 = {
    username: {
        avatarUrl: "https://github.com/maricastroc.png",
        name: "maricastroc"
    },
    replyTo: "@amyrobson",
    content:
        "Sure, let's do it! I'm looking forward to see your resolution and discuss about it!",
    publishedAt: new Date("2023-03-23 07:40:12"),
    replies: [],
    isReplyOfAComment: true,
    isFromAuthor: true
};

const reply2Comment1 = {
    username: {
        avatarUrl: amyImg,
        name: "amyrobson"
    },
    replyTo: "@amyrobson",
    content:
        "If I can bet, I think she used the Phospor Icons. It's a really great library!",
    publishedAt: new Date("2023-03-24 16:40:12"),
    replies: [],
    isReplyOfAComment: true,
    isFromAuthor: false
};

const comment1 = {
    username: {
        avatarUrl: amyImg,
        name: "amyrobson"
    },
    replyTo: "",
    content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
    publishedAt: new Date("2023-03-25 14:20:25"),
    replies: [],
    isReplyOfAComment: false,
    isFromAuthor: false
};

const comment2 = {
    username: {
        avatarUrl: maxImg,
        name: "maxblagun"
    },
    replyTo: "",
    content:
        "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    publishedAt: new Date("2023-03-24 23:20:12"),
    replies: [reply1Comment2, reply2Comment2],
    isReplyOfAComment: false,
    isFromAuthor: false
};

const comment3 = {
    username: {
        avatarUrl: ramsesImg,
        name: "ramsesmiron"
    },
    replyTo: "",
    content:
        "I see you've made some very interesting changes to the application's functionality! I also recently completed this challenge, we could talk about different resolutions!",
    publishedAt: new Date("2023-03-21 15:50:30"),
    replies: [reply1Comment1],
    isReplyOfAComment: false,
    isFromAuthor: false
};

const comment4 = {
    username: {
        avatarUrl: juliusomoImg,
        name: "juliusomo"
    },
    replyTo: "",
    content:
        "Good one, Mari! I really like the light/dark theme switching feature a lot! Did you use any icon libraries?",
    publishedAt: new Date("2023-03-22 17:16:11"),
    replies: [reply2Comment1],
    isReplyOfAComment: false,
    isFromAuthor: false
};

const posts: PostType[] = [
    {
        id: 1,
        username: {
            avatarUrl: "https://github.com/maricastroc.png",
            name: "maricastroc"
        },
        content: [
            {
                type: "paragraph",
                content: "Hey there, everyone! 👋"
            },
            {
                type: "paragraph",
                content:
                    "I just uploaded a new project to my GitHub. It's a landing page of a Coffee Roasters company, presenting general information about its products and allowing the user to customize their request and define how often they want to receive it. 🚀"
            },
            {
                type: "link",
                content:
                    "maricastroc/Coffee-Rosters-Landing-Page",
                url: "https://github.com/maricastroc/Coffee-Rosters-Landing-Page"
            }
        ],
        publishedAt: new Date("2023-03-24 22:50:00"),
        comments: [comment1, comment2]
    },
    {
        id: 2,
        username: {
            avatarUrl: "https://github.com/maricastroc.png",
            name: "maricastroc"
        },
        content: [
            {
                type: "paragraph",
                content: "Hello, people! 👻"
            },
            {
                type: "paragraph",
                content:
                    "I had a full programming study weekend. So, I started learning about API's and, for practice, I developed a project made with JS, using GitHub API user, that lets you search for a Github user by their username. Check it out! 💥"
            },
            {
                type: "link",
                content: "maricastroc/Search-User-GitHub",
                url: "https://github.com/maricastroc/Search-User-GitHub"
            }
        ],
        publishedAt: new Date("2023-03-20 21:35:08"),
        comments: [comment3, comment4]
    }
];

export function App() {
    return (
        <div>
            {posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        username={post.username}
                        content={post.content}
                        publishedAt={post.publishedAt}
                        comments={post.comments}
                    />
                );
            })}
        </div>
    );
}

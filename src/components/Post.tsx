import styles from "./Post.module.css";
import {format, formatDistanceToNow} from "date-fns";

import {Comment} from "./Comment";
import {Avatar} from "./Avatar";

import {
    ChangeEvent,
    FormEvent,
    InvalidEvent,
    useState
} from "react";

interface Content {
    type: "paragraph" | "link";
    content: string;
    url?: string | undefined;
}

interface Username {
    name: string;
    avatarUrl: string;
}

interface CommentProps {
    username: Username;
    replyTo?: string;
    content: string;
    publishedAt: Date;
    replies: Array<CommentProps>;
    isReplyOfAComment: boolean;
    isFromAuthor: boolean;
    onDeleteComment?: (comment: string) => void;
}

export interface PostType {
    id: number;
    username: Username;
    content: Content[];
    publishedAt: Date;
    comments: CommentProps[]
}

interface PostProps {
    username: Username;
    content: Content[];
    publishedAt: Date;
    comments: Array<CommentProps>;
}

export function Post(props: PostProps) {
    const [allComments, setComment] = useState(
        props.comments
    );

    const [newCommentText, setNewCommentText] =
        useState("");

    const publishedDateFormattedTitle = format(
        props.publishedAt,
        "dd LLLL 'at' hh':'mm aaa"
    );

    const publishedDateFormattedTime = format(
        props.publishedAt,
        "yyyy'-'MM'-'dd hh':'mm':'ssaaa"
    );

    const publishedDateRelativeToNow = formatDistanceToNow(
        props.publishedAt,
        {
            addSuffix: true
        }
    );

    function handleNewCommentChange(
        ev: ChangeEvent<HTMLTextAreaElement>
    ) {
        ev.target.setCustomValidity("");
        setNewCommentText(ev.target.value);
    }

    function handleCreateNewComment(ev: FormEvent) {
        ev.preventDefault();
        const newComment = {
            username: {
                avatarUrl:
                    "https://github.com/maricastroc.png",
                name: "maricastroc"
            },
            content: newCommentText,
            publishedAt: new Date("2023-03-24 22:50:00"),
            replies: [],
            isReplyOfAComment: false,
            isFromAuthor: true,
            onDeleteComment: deleteComment
        };

        setComment([...allComments, newComment]);
        setNewCommentText("");
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne =
            props.comments.filter((comment) => {
                return comment.content !== commentToDelete;
            });

        setComment(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(
        ev: InvalidEvent<HTMLTextAreaElement>
    ) {
        console.log(ev.target);
        ev.target.setCustomValidity(
            "This field is required!"
        );
    }

    return (
        <div className={styles.post}>
            <div className={styles.postContent}>
                <header>
                    <div className={styles.userInfo}>
                        <Avatar
                            src={props.username.avatarUrl}
                            isMajor
                        />
                        <strong>
                            {props.username.name}
                        </strong>
                    </div>
                    <time
                        title={publishedDateFormattedTitle}
                        dateTime={
                            publishedDateFormattedTime
                        }
                    >
                        {publishedDateRelativeToNow}
                    </time>
                </header>
                <main>
                    {props.content.map((line) => {
                        if (line.type === "paragraph") {
                            return (
                                <p key={line.content}>
                                    {line.content}
                                </p>
                            );
                        } else if (line.type === "link") {
                            return (
                                <p key={line.content}>
                                    <a
                                        href={line.url}
                                        target="_blank"
                                    >
                                        {line.content}
                                    </a>
                                </p>
                            );
                        }
                    })}
                </main>
            </div>
            <form
                className={styles.commentArea}
                onSubmit={handleCreateNewComment}
            >
                <div className={styles.avatarAndContent}>
                    <Avatar src="https://github.com/maricastroc.png" />

                    <textarea
                        placeholder="Leave a comment!"
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        value={newCommentText}
                        required
                    ></textarea>
                </div>

                <button type="submit">Comment</button>
            </form>
            <div className={styles.postComments}>
                {allComments.map((comment) => {
                    return (
                        <Comment
                            key={comment.content}
                            username={comment.username}
                            content={comment.content}
                            publishedAt={
                                comment.publishedAt
                            }
                            replies={comment.replies}
                            isReplyOfAComment={
                                comment.isReplyOfAComment
                            }
                            isFromAuthor={
                                comment.isFromAuthor
                            }
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </div>
    );
}

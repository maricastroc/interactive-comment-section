import {
    ChangeEvent,
    FormEvent,
    InvalidEvent,
    useState
} from "react";

import {format, formatDistanceToNow} from "date-fns";
import {Avatar} from "./Avatar";

import styles from "./Comment.module.css";

import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";
import iconReply from "../images/icon-reply.svg";
import iconDelete from "../images/icon-delete.svg";
import iconEdit from "../images/icon-edit.svg";

interface Username {
    name: string;
    avatarUrl: string;
}

interface CommentProps {
    username: Username;
    replyTo?: string;
    content: string;
    publishedAt: Date;
    replies: CommentProps[];
    isReplyOfAComment: boolean;
    isFromAuthor: boolean;
    onDeleteComment?: (comment: string) => void;
}

export function Comment(props: CommentProps) {
    function handleDeleteComment() {
        props.onDeleteComment!(props.content);
    }

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

    const [newReplyText, setNewReplyText] = useState("");

    const [replyBtnText, setReplyBtnText] =
        useState("Reply");

    const [openReplySection, setOpenReplySection] =
        useState(false);

    const [allReplies, setAllReplies] = useState(
        props.replies
    );

    const [openEditTextarea, setOpenEditTextarea] =
        useState(true);

    const [openCommentTextarea, setOpenCommentTextarea] =
        useState(false);

    const [editTextToUpdate, setEditTextToUpdate] =
        useState(props.content);

    const [updatedText, setUpdatedText] = useState(
        props.content
    );

    const [likeCount, setLikeCount] = useState(0);

    function handleNewCommentChange(
        ev: ChangeEvent<HTMLTextAreaElement>
    ) {
        ev.target.setCustomValidity("");
        setNewReplyText(ev.target.value);
    }

    function handleSetAllReplies(ev: FormEvent) {
        ev.preventDefault();
        console.log(newReplyText);
        const newReply = {
            username: {
                avatarUrl:
                    "https://github.com/maricastroc.png",
                name: "maricastroc"
            },
            replyTo: `@${props.username.name}`,
            content: newReplyText,
            publishedAt: new Date(),
            replies: [],
            isReplyOfAComment: true,
            isFromAuthor: true,
            onDeleteComment: deleteComment
        };

        setAllReplies([...allReplies, newReply]);
        setOpenReplySection(false);
        setReplyBtnText("Reply");
        setNewReplyText("");
    }

    function handleSetOpenReplySection() {
        if (!openReplySection) {
            setOpenReplySection(true);
            setReplyBtnText("Close Reply");
        } else {
            setOpenReplySection(false);
            setReplyBtnText("Reply");
        }
    }

    function handleSetOpenEditTextarea() {
        setOpenEditTextarea(false);
        setOpenCommentTextarea(true);
    }

    function handleEditTextToUpdate(
        ev: ChangeEvent<HTMLTextAreaElement>
    ) {
        ev.target.setCustomValidity("");
        setEditTextToUpdate(ev.target.value);
    }

    function handleSubmitTextToUpdate(ev: FormEvent) {
        ev.preventDefault();
        setOpenEditTextarea(true);
        setOpenCommentTextarea(false);
        setUpdatedText(editTextToUpdate);
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = allReplies.filter(
            (reply) => {
                return reply.content !== commentToDelete;
            }
        );

        setAllReplies(commentsWithoutDeletedOne);
    }

    function handleNewReplyInvalid(
        ev: InvalidEvent<HTMLTextAreaElement>
    ) {
        console.log(ev.target);
        ev.target.setCustomValidity(
            "This field is required!"
        );
    }

    function handleLikeComment() {
        const newNumber = likeCount + 1;
        setLikeCount(newNumber);
    }

    function handleUnLikeComment() {
        const newNumber = likeCount - 1;
        setLikeCount(newNumber);
    }

    return (
        <div
            className={
                props.isReplyOfAComment === false
                    ? styles.comment
                    : styles.commentReply
            }
        >
            <div className={styles.commentSection}>
                <div className={styles.likeCounter}>
                    <img
                        onClick={handleLikeComment}
                        src={iconPlus}
                        alt="Plus Icon"
                    />
                    <strong>{likeCount}</strong>
                    <img
                        onClick={handleUnLikeComment}
                        src={iconMinus}
                        alt="Minus Icon"
                    />
                </div>
                <div className={styles.commentContent}>
                    <header className={styles.header}>
                        <div className={styles.userInfo}>
                            <Avatar
                                src={
                                    props.username.avatarUrl
                                }
                            />
                            <div
                                className={
                                    styles.userInfoAndTime
                                }
                            >
                                <div
                                    className={
                                        styles.userNameAndTag
                                    }
                                >
                                    <strong>
                                        {
                                            props.username
                                                .name
                                        }
                                    </strong>
                                    <span
                                        className={
                                            props.isFromAuthor
                                                ? styles.userTag
                                                : styles.hiddenUserTag
                                        }
                                    >
                                        you
                                    </span>
                                </div>
                                <div
                                    className={styles.time}
                                >
                                    <time
                                        title={
                                            publishedDateFormattedTitle
                                        }
                                        dateTime={
                                            publishedDateFormattedTime
                                        }
                                    >
                                        {
                                            publishedDateRelativeToNow
                                        }
                                    </time>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                props.isFromAuthor === false
                                    ? styles.replyButton
                                    : styles.hiddenReplyButton
                            }
                            onClick={
                                handleSetOpenReplySection
                            }
                        >
                            <img
                                src={iconReply}
                                alt="Reply Icon"
                            />
                            <strong>{replyBtnText}</strong>
                        </div>
                        <div
                            className={
                                props.isFromAuthor === false
                                    ? styles.hiddenEditDeleteBtn
                                    : styles.editDeleteBtn
                            }
                        >
                            <div
                                className={styles.deleteBtn}
                                onClick={
                                    handleDeleteComment
                                }
                            >
                                <img
                                    src={iconDelete}
                                    alt="Delete Icon"
                                />
                                <strong>Delete</strong>
                            </div>
                            <div
                                className={styles.editBtn}
                                onClick={
                                    handleSetOpenEditTextarea
                                }
                            >
                                <img
                                    src={iconEdit}
                                    alt="Edit Icon"
                                />
                                <strong>Edit</strong>
                            </div>
                        </div>
                    </header>
                    <main className={styles.content}>
                        <p
                            className={styles.mainText}
                            hidden={openCommentTextarea}
                        >
                            <span>{props.replyTo} </span>
                            {updatedText}
                        </p>
                        <form
                            hidden={openEditTextarea}
                            onSubmit={
                                handleSubmitTextToUpdate
                            }
                        >
                            <textarea
                                hidden={openEditTextarea}
                                value={editTextToUpdate}
                                onInvalid={
                                    handleNewReplyInvalid
                                }
                                onChange={
                                    handleEditTextToUpdate
                                }
                            ></textarea>
                            <button
                                type="submit"
                                hidden={openEditTextarea}
                            >
                                UPDATE
                            </button>
                        </form>
                    </main>
                </div>
            </div>

            <footer
                hidden={!openReplySection}
                onSubmit={handleSetAllReplies}
            >
                <form className={styles.replyTextArea}>
                    <div
                        className={styles.userAvatarAndText}
                    >
                        <Avatar src="https://github.com/maricastroc.png" />

                        <textarea
                            onChange={
                                handleNewCommentChange
                            }
                            onInvalid={
                                handleNewReplyInvalid
                            }
                            value={newReplyText}
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Reply</button>
                </form>
            </footer>

            <div className={styles.allReplies}>
                {allReplies.map((reply) => {
                    return (
                        <Comment
                            key={reply.content}
                            username={reply.username}
                            replyTo={reply.replyTo}
                            content={reply.content}
                            publishedAt={reply.publishedAt}
                            replies={reply.replies}
                            isFromAuthor={
                                reply.isFromAuthor
                            }
                            isReplyOfAComment={
                                reply.isReplyOfAComment
                            }
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </div>
    );
}

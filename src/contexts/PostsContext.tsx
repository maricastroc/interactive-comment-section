import {
  ReactNode,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'
import initialPosts from '../data/posts.json'
import initialComments from '../data/comments.json'

export interface ContentProps {
  type: 'paragraph' | 'link'
  content: string
  url?: string
}

export interface UsernameProps {
  avatarUrl: string
  name: string
}

export interface ReplyProps {
  id: number
  commentId: number
  publishedAt: string
  username: UsernameProps
  content: string
  toUser: string
}

export interface CommentProps {
  id: number
  post: number
  publishedAt: string
  content: string
  username: UsernameProps
  isFromUser: boolean
}

export interface PostProps {
  id: number
  publishedAt: string
  content: ContentProps[]
  username: UsernameProps
}

interface PostContextType {
  posts: PostProps[]
  setPosts: Dispatch<SetStateAction<PostProps[]>>
  comments: CommentProps[]
  setComments: Dispatch<SetStateAction<CommentProps[]>>
  replies: ReplyProps[]
  setReplies: Dispatch<SetStateAction<ReplyProps[]>>
  addNewComment: (content: string, postId: number) => void
  removeComment: (idToRemove: number) => void
  editComment: (content: string, id: number) => void
  addNewReply: (content: string, commentId: number, toUser: string) => void
  removeReply: (idToRemove: number) => void
  editReply: (content: string, id: number) => void
}

interface PostContextProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostContextProps) {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts as PostProps[])

  const [comments, setComments] = useState<CommentProps[]>(
    initialComments as CommentProps[],
  )

  const [replies, setReplies] = useState<ReplyProps[]>([])

  function addNewComment(content: string, postId: number) {
    const lastCommentId = comments[comments.length - 1].id

    const newComment = {
      id: lastCommentId + 1,
      post: postId,
      publishedAt: new Date().toISOString(),
      content,
      username: {
        name: 'maricastroc',
        avatarUrl: 'https://github.com/maricastroc.png',
      },
      isFromUser: true,
    }

    setComments([...comments, newComment])
  }

  function removeComment(idToRemove: number) {
    const allCommentsWithousRemovedOne = comments.filter((comment) => {
      return comment.id !== idToRemove
    })

    setComments(allCommentsWithousRemovedOne)
  }

  function editComment(content: string, id: number) {
    const updatedComments = comments.map((comment) => {
      if (comment.id !== id) {
        return comment
      } else {
        return {
          ...comment,
          content,
        }
      }
    })

    setComments(updatedComments)
  }

  function addNewReply(content: string, commentId: number, toUser: string) {
    let lastReplyId

    if (replies.length > 0) {
      lastReplyId = replies[replies.length - 1].id
    } else {
      lastReplyId = 0
    }

    const newReply = {
      id: lastReplyId + 1,
      commentId,
      publishedAt: new Date().toISOString(),
      content,
      username: {
        name: 'maricastroc',
        avatarUrl: 'https://github.com/maricastroc.png',
      },
      toUser,
    }

    setReplies([...replies, newReply])
  }

  function editReply(content: string, id: number) {
    const updatedReplies = replies.map((reply) => {
      if (reply.id !== id) {
        return reply
      } else {
        return {
          ...reply,
          content,
        }
      }
    })

    setReplies(updatedReplies)
  }

  function removeReply(idToRemove: number) {
    const allRepliesWithousRemovedOne = replies.filter((reply) => {
      return reply.id !== idToRemove
    })

    setReplies(allRepliesWithousRemovedOne)
  }

  const PostsContextValue: PostContextType = {
    posts,
    setPosts,
    comments,
    setComments,
    addNewComment,
    removeComment,
    editComment,
    replies,
    setReplies,
    addNewReply,
    removeReply,
    editReply,
  }

  return (
    <PostsContext.Provider value={PostsContextValue}>
      {children}
    </PostsContext.Provider>
  )
}

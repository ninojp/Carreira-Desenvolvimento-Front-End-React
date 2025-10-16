import styles from './blogpost.module.css'

import { ThumbsUpButton } from "../../components/CardPost/ThumbsUpButton"
import { Author } from "../../components/Author"
import Typography from "../../components/Typography"
import { CommentList } from "../../components/CommentList"
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ModalComment } from "../../components/ModalComment"
import { http } from '../../api'
import { usePostInteractions } from '../../hooks/usePostInteractions'
import { useAuth } from '../../hooks/useAuth'

export const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    // const [commentsPost, setCommentsPost] = useState([]);
    //--------------------------------------------------------------
    // const handleNewComment = (newComment) => {
    //     setCommentsPost([newComment, ...commentsPost])
    // }
    //--------------------------------------------------------------
    // const handleDelete = (commentId) => {
    //     const isConfirmed = window.confirm('Tem certeza que deseja DELETAR este post?');
    //     if (!isConfirmed) {
    //         navigate(-1); // Volta para a página anterior
    //         return;
    //     }
    //     if (isConfirmed) {
    //         http.delete(`comments/${commentId}`)
    //             .then(() => {
    //                 setCommentsPost(oldState => oldState.filter(comment => comment.id !== commentId));
    //             })
    //             .catch(error => {
    //                 console.error('Erro ao deletar comentário:', error);
    //             });
    //     };
    // }
    //--------------------------------------------------------------
    const { comments, likes, handleNewComment, handleDeleteComment, handleLikeButton } = usePostInteractions(post)
    //-----------------------------------------
    const onLikeClick = () => {
        handleLikeButton(post?.id)
    }
    //----------------------------------------
    useEffect(() => {
        http.get(`blog-posts/slug/${slug}`)
            .then(response => {
                setPost(response.data);
                usePostInteractions.updateComments(response.data.comments);
            })
            .catch(error => {
                // debugger;
                if (error.status === 404) {
                    navigate('/not-found');
                }
            });

    }, [slug, navigate])
    if (!post) {
        return null
    }
    return (
        <main className={styles.main}>
            <article className={styles.card}>
                <header className={styles.header}>
                    <figure className={styles.figure}>
                        <img
                            src={post.cover}
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </figure>
                </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={styles.footer}>
                    <div className={styles.actions}>
                        <div className={styles.action}>
                            <ThumbsUpButton loading={false} onClick={onLikeClick} disabled={!isAuthenticated} />
                            <p>
                                {likes}
                            </p>
                        </div>
                        <div className={styles.action}>
                            <ModalComment onSuccess={handleNewComment} postId={post?.id} />
                            <p>
                                {comments.length}
                            </p>
                        </div>
                    </div>
                    <Author author={post.author} />
                </footer>
            </article>
            <Typography variant="h3">Código:</Typography>
            <div className={styles.code}>
                <ReactMarkdown>
                    {post.markdown}
                </ReactMarkdown>
            </div>
            <CommentList comments={comments} onDelete={handleDeleteComment} />
        </main>
    )
}

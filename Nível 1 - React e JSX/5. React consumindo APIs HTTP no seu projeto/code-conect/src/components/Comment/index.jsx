import styles from './comment.module.css'
import { Avatar } from "../Avatar"
import { ModalComment } from '../ModalComment'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import { IconButton } from '../IconButton'

export const Comment = ({ comment, onDelete }) => {
    const { user } = useAuth();
    const [text, setText] = useState(comment.text);
    const isOwner = user && (user.id === comment.author.id);

    const handleEdit = (updatedComment) => {
        setText(updatedComment.text);
    }
    return (<div className={styles.comment}>
        <Avatar author={comment.author} />
        <strong>@{comment.author.name}</strong>
        <p>{text}</p>
        <div className={styles.divider} />
        {isOwner && <ModalComment 
        isEditing 
        onSuccess={handleEdit}
        defaultValue={text}
        commentId={comment.id} 
        />}
        {isOwner && <IconButton onClick={() => onDelete(comment.id)}>Excluir</IconButton>}
    </div>)
}

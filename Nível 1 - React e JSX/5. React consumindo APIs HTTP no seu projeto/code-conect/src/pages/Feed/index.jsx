import { useEffect, useState } from "react"
import { CardPost } from "../../components/CardPost"
import styles from './feed.module.css'

export const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/blog-posts')
        .then(respostaApi => respostaApi.json())
        .then(dadosApi => setPosts(dadosApi))
    }, []);
    // Mesma lógica do código acima, mas usando async/await
    // useEffect(() => {
    //     async function fetchPosts() {
    //         try {
    //             const respostaAPI = await fetch('http://localhost:3000/blog-posts')
    //             const dadosAPI = await respostaAPI.json()
    //             setPosts(dadosAPI)
    //         } catch (error) {
    //             console.error('Erro ao buscar posts:', error)
    //         }
    //     }
    //     fetchPosts()
    // }, []);
    return (
        <main className={styles.grid}>
            {/* {posts.map(post => <CardPost key={post.slug} post={post} />)} */}
            {/* {posts.length > 0 ? posts.map(post => <CardPost key={post.slug} post={post} />) : 'Carregando...'} */}
            {posts && posts.map(post => <CardPost key={post.slug} post={post} />)}
        </main>
    )
}

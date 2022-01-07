import Head from 'next/head'
import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'

import styles from './styles.module.scss'


export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.postsList}>
                    <a href="#">
                        <time>01 de janeiro de 2022</time>
                        <strong>Título do Posts</strong>
                        <p>Texto de introdução ao  Posto, que bla bla bla faz isso e aquilo pirueta pão com manteiga</p>
                    </a>

                    <a href="#">
                        <time>01 de janeiro de 2022</time>
                        <strong>Título do Posts</strong>
                        <p>Texto de introdução ao  Posto, que bla bla bla faz isso e aquilo pirueta pão com manteiga</p>
                    </a>

                    <a href="#">
                        <time>01 de janeiro de 2022</time>
                        <strong>Título do Posts</strong>
                        <p>Texto de introdução ao  Posto, que bla bla bla faz isso e aquilo pirueta pão com manteiga</p>
                    </a>

                    <a href="#">
                        <time>01 de janeiro de 2022</time>
                        <strong>Título do Posts</strong>
                        <p>Texto de introdução ao  Posto, que bla bla bla faz isso e aquilo pirueta pão com manteiga</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'pos')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title:RichText.asText(post.data.)
        }
    })

    return {
        props: {}
    }

}
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Article } from '../../entities';

function ArticlePage({
  article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div style={{ margin: '2rem' }}>
      <h1>{article.title}</h1>
      <h5>{article.author}</h5>
      <div>
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  article: Article;
}> = async (context) => {
  const res = await fetch(
    'http://localhost:3333/api/articles/' + context.params.id
  );
  const article = await res.json();

  if (
    Object.prototype.hasOwnProperty.call(article, 'statusCode') &&
    article.statusCode !== 200
  ) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article },
  };
};

export default ArticlePage;

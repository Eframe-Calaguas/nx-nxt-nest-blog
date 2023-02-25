import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { Article } from '../entities';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Index({
  articles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {articles?.map((article: Article) => (
          <Grid item xs={6}>
            <Item>
              <CardContent>
                <Typography variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {article.author}
                </Typography>
                <Typography variant="body2" noWrap data-lines="3">
                  {article.body}
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Link key={article.id} href={'/articles/' + article.id}>
                  <Button size="small">See more</Button>
                </Link>
              </CardActions>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<{
  articles: Article[];
}> = async () => {
  const res = await fetch('http://localhost:3333/api/articles');
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default Index;

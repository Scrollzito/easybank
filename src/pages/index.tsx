import React from 'react'
import Head from 'next/head'
import * as S from '../styles/Home'

const Home: React.FC = () => {
  return (
    <S.Main>
      <Head>
        <title>Create Next App</title>
      </Head>

      <S.Container>
        <S.Card>
          <h1>Welcome to Template Nextjs</h1>
        </S.Card>
      </S.Container>
    </S.Main>
  )
}

export default Home

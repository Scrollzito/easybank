import React from 'react'
import Head from 'next/head'
import * as S from '../styles/Home'
import { Container } from '@material-ui/core'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Head>
          <title>easyBank</title>
        </Head>
      </Container>
      <S.Header>
        <Container>
          <S.HeaderElements>
            <S.Logo>
              <img src={require('../assets/images/logo.svg')} />
            </S.Logo>
            <nav>
              <S.Menus>
                <S.MenuItem>Home</S.MenuItem>
                <S.MenuItem>About</S.MenuItem>
                <S.MenuItem>Contact</S.MenuItem>
                <S.MenuItem>Blog</S.MenuItem>
                <S.MenuItem>Careers</S.MenuItem>
              </S.Menus>
            </nav>
            <S.RequestButton href="#">
              <div>Request Invite</div>
            </S.RequestButton>
          </S.HeaderElements>
        </Container>
      </S.Header>
      <S.BannerSection>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <S.InfoBannerSection>
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <S.RequestButton href="#">
              <div>Request Invite</div>
            </S.RequestButton>
          </S.InfoBannerSection>
          <S.ImageBannerSection>
            <S.BackgroundBanner>
              <img
                src={require('../assets/images/bg-intro-desktop.svg')}
                alt=""
              />
            </S.BackgroundBanner>
          </S.ImageBannerSection>
        </Container>
      </S.BannerSection>
      <S.Banner>
        <img src={require('../assets/images/image-mockups.png')} alt="" />
      </S.Banner>
      <S.DetailsSection>
        <Container>
          <S.Details>
            <S.DetailsHeader>
              <h2>Why choose EasyBank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub.
              </p>
              <p>Control your finances like never before.</p>
            </S.DetailsHeader>
            <S.Services>
              <S.ServiceItem>
                <S.ServiceIcon>
                  <img src={require('../assets/images/icon-online.svg')} />
                </S.ServiceIcon>
                <h3>Online Banking</h3>
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever youare in the world.
                </p>
              </S.ServiceItem>
              <S.ServiceItem>
                <S.ServiceIcon>
                  <img src={require('../assets/images/icon-budgeting.svg')} />
                </S.ServiceIcon>
                <h3>Simple Budgeting</h3>
                <p>
                  See exactly where your money goes each month. Receive
                  notifications when you're close to hitting your limits.
                </p>
              </S.ServiceItem>
              <S.ServiceItem>
                <S.ServiceIcon>
                  <img src={require('../assets/images/icon-onboarding.svg')} />
                </S.ServiceIcon>
                <h3>Fast Onboarding</h3>
                <p>
                  We don't do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </S.ServiceItem>
              <S.ServiceItem>
                <S.ServiceIcon>
                  <img src={require('../assets/images/icon-api.svg')} />
                </S.ServiceIcon>
                <h3>Open API</h3>
                <p>
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </S.ServiceItem>
            </S.Services>
          </S.Details>
        </Container>
      </S.DetailsSection>
      <S.ArticlesSection>
        <Container>
          <S.ArticleContainer>
            <h2>Lastest Articles</h2>
            <S.ArticleList>
              <S.Article>
                <S.ArticleImage>
                  <img
                    src={require('../assets/images/image-currency.jpg')}
                    alt=""
                  />
                </S.ArticleImage>
                <S.ArticleDescription>
                  <S.ArticleAutor>By Claire Robinson</S.ArticleAutor>
                  <h4>Receive money in any currency with no fees</h4>
                  <p>
                    The world is getting smaller and we're becoming more mobile.
                    So why should you be forced to only receive money in a
                    single...
                  </p>
                </S.ArticleDescription>
              </S.Article>{' '}
              <S.Article>
                <S.ArticleImage>
                  <img
                    src={require('../assets/images/image-restaurant.jpg')}
                    alt=""
                  />
                </S.ArticleImage>
                <S.ArticleDescription>
                  <S.ArticleAutor>By Wilson Hutton</S.ArticleAutor>
                  <h4>Treat yourself without worrying about money</h4>
                  <p>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means
                    you...
                  </p>
                </S.ArticleDescription>
              </S.Article>
              <S.Article>
                <S.ArticleImage>
                  <img
                    src={require('../assets/images/image-plane.jpg')}
                    alt=""
                  />
                </S.ArticleImage>
                <S.ArticleDescription>
                  <S.ArticleAutor>By Wilson Hutton</S.ArticleAutor>
                  <h4>Take your EasyBank card wherever you go</h4>
                  <p>
                    We want you to enjoy your travels.This is why we don't
                    charge any fees on purchases while you're abroad. We'll even
                    show you...
                  </p>
                </S.ArticleDescription>
              </S.Article>
              <S.Article>
                <S.ArticleImage>
                  <img
                    src={require('../assets/images/image-confetti.jpg')}
                    alt=""
                  />
                </S.ArticleImage>
                <S.ArticleDescription>
                  <S.ArticleAutor>By Claire Robinson</S.ArticleAutor>
                  <h4>Our invite-only Beta accounts are now live!</h4>
                  <p>
                    After a lot of hard work by the whole team, we're excited to
                    launch our closed beta. It's easy to request an invite
                    through the site...
                  </p>
                </S.ArticleDescription>
              </S.Article>
            </S.ArticleList>
          </S.ArticleContainer>
        </Container>
      </S.ArticlesSection>
      <S.Footer>
        <Container>
          <S.FooterContainer>
            <div>
              <S.LogoWhite>
                <img src={require('../assets/images/logo_white.svg')} />
              </S.LogoWhite>
              <div></div>
            </div>
            <div></div>
            <div></div>
          </S.FooterContainer>
        </Container>
      </S.Footer>
    </>
  )
}

export default Home

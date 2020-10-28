import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`

export const Container = styled.div`
  width: 1024px;
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 17px;
  -webkit-box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.75);
`

export const Header = styled.header`
  background: hsl(0, 0%, 98%);
  z-index: 1;
  position: relative;
  box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.13);
`

export const HeaderElements = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`

export const Menus = styled.ul`
  display: flex;
  align-items: center;
`

export const MenuItem = styled.li`
  margin: 0 15px;
  padding: 0 5px;
  cursor: pointer;
  height: 92px;
  display: flex;
  align-items: center;
  border-bottom: 5px solid transparent;
  color: hsl(233, 8%, 62%);
  &:hover {
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to right,
      rgba(49, 211, 92, 1) 0%,
      rgba(43, 183, 218, 1) 86%
    );
    opacity: 0.7;
  }
`

export const RequestButton = styled.a`
  padding: 15px;
  background: linear-gradient(
    148deg,
    rgba(79, 224, 118, 1) 0%,
    rgba(43, 183, 218, 1) 86%
  );
  border-radius: 48px;
  color: white;
  width: 180px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
export const Logo = styled.a`
  padding: 15px;
  cursor: pointer;
`

export const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 580px;
`

export const InfoBannerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 20px 20px 20px 0;
  h1 {
    padding: 10px 0;
    font-size: 3.4em;
    font-weight: 400;
  }
  p {
    margin-top: 20px;
    margin-bottom: 36px;
  }
`

export const ImageBannerSection = styled.div``

export const BackgroundBanner = styled.div`
  position: absolute;
  right: -332px;
  top: -132px;
  z-index: -1;
  width: 1081px;
`

export const Banner = styled.div`
  width: 700px;
  position: absolute;
  top: -21px;
  right: -121px;
`
export const DetailsSection = styled.section`
  background: hsl(220deg 6% 96%);
  height: 600px;
  display: flex;
  align-items: center;
`

export const Details = styled.div`
  padding: 28px 0;
`
export const DetailsHeader = styled.div`
  margin-bottom: 48px;
  h2 {
    margin-bottom: 25px;
    font-weight: 400;
  }
  p {
    line-height: 23px;
  }
`

export const Services = styled.div`
  display: flex;
`
export const ServiceItem = styled.div`
  padding: 10px 34px 20px 0;
  h3 {
    margin: 20px 0;
    font-weight: 400;
  }
`
export const ServiceIcon = styled.div`
  width: 90px;
`

export const ArticlesSection = styled.section``
export const ArticleContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: 400;
  }
`
export const Article = styled.div`
  padding-right: 40px;
`
export const ArticleImage = styled.div`
  width: 250px;
  height: 167px;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`
export const ArticleList = styled.div`
  display: flex;
  margin-top: 50px;
`
export const ArticleDescription = styled.div`
  width: 250px;
  background: white;
  padding: 20px;
  h4 {
    margin: 15px 0;
    font-weight: 400;
    &:hover {
      color: #30c98b;
      cursor: pointer;
    }
  }
  p {
    font-size: 0.9em;
  }
`

export const ArticleAutor = styled.h5`
  font-size: 0.7em;
  font-weight: 400;
  color: hsl(233, 8%, 62%);
`

export const Footer = styled.footer`
  background: hsl(233, 26%, 24%);
  height: 180px;
`

export const FooterContainer = styled.div``
export const LogoWhite = styled.div`
  width: 169px;
  padding: 15px;
`

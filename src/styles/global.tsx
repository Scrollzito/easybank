import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

body{
  background: ${props => props.theme.color.veryLight};
  color: ${props => props.theme.color.text};
  font: 400 18px Public Sans, sans-serif;
  position: relative;
  overflow-x: hidden;
}

a{
  color: inherit;
  text-decoration: none;
}

img{
  width: 100%;
  height: auto;
}

ul{
  list-style: none;
}

h1,h2,h3,h4,h5{
  color: hsl(233, 26%, 24%)
}

p{
  color: hsl(233, 8%, 62%);
}
`

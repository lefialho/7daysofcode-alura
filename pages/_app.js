import Head from './src/Head'
import '../styles/index.scss'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: 'hsl(var(--base-hue-primary-color), var(--base-saturation-primary-color), 64%)'
  },
  spacing: {
    small: 1,
    medium: 2,
    large: 3,
    exLarge: 4,
  },
  subtitle: {
    fontFamily: '"Elsie Swash Caps", cursive',
    fontSize: 'var(--font-size-subtitle)',
    lineHeight: 1.1,
    color: 'var(--secondary-color)',
  },
  text: {
    color: 'var(--secondary-color)',
    fontSize: 'var(--font-size-tag)',
    opacity: 0.5,
  }
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head title="Casa Verde | Home"/>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

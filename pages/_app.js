import Head from './src/Head'
import '../styles/index.scss'
import { theme } from './theme'
import { ThemeProvider } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head title="Casa Verde | Home"/>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

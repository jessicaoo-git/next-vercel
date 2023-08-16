//ESTE ES MI PUNTO CENTRAL DE MI APLICACIÓN
import '@/styles/globals.css'
import { NextPage } from 'next';
import type { AppProps } from 'next/app';


//es un getLayout opcional porque no todas las paginas lo tiene por eso tiene el ? 
//Ese getLayout es una función q va devolver un JSX element o tambien se puede poner un reactNode, si se coloca
//reactNode habria q importarlo de React pero si si coloca JSX.Element no habria necesidad de importar
type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
//otra forma seria
// getLayout?: (page: ReactElement) => ReactNode;

}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

//Si Component.getLayout existe me lo va a retornar de lo contrario va tomar la pagina y va retornar el page
  const getLayout = Component.getLayout || ((page)=> page);

  // return <Component {...pageProps} />

//Ahora utilizo el getLayout para genera la respuesta y q funcione el dark en la pagina about
  return getLayout( <Component {...pageProps} />)
}

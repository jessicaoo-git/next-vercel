import React, {CSSProperties, FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router'


//Se coloca por fuera del componente ActiveLink para que no sea reprocesado pq siempre va hacer el mismo
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'

}
//Al no poner el singo de '?' estoy indicando q es obligatorio. Si no fuera obligatorio tendria
//que estar de la siguiente forma  ejemplo : href?: string
interface Props{
  text: string;
  href: string;

}
//Aqui le indico a mi FC q tambien va extender de esas props. Donde es un funcional component pero
// internamente sus properties lucen de la manera q se indico en la interface Props y se puede expandir
//y extender todo lo q yo quiera
export const ActiveLink:FC<Props> = ({text, href}) => {

    //De useRouter destructuramos el asPath para saber en cual path es en el que me encuentro
    const{asPath} = useRouter();

  return (
   <Link href={href} legacyBehavior>
     <a style={asPath== href ? style: undefined}>{text} </a>
   </Link>
  )
}


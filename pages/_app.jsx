import Link from 'next/link'

export default function MyApp({ Component, pageProps }) {
  const links = [
    '/',
    '/home',
    '/madden',
  ]
  return <>
    <ul style={{display: "none"}}>
      {links.map(l => <li key={l}><Link href={l}>Go To {l}</Link></li>)}
    </ul>

    <Component {...pageProps} />
    </>
}


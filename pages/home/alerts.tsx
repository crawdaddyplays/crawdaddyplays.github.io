import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

type AppOwnProps = { example: string }

export default function Alerts (props: any) {
  return <>Alerts
  <pre>{ JSON.stringify(props, undefined, 2) }</pre>
    </>
}

// https://nextjs.org/docs/pages/building-your-application/routing/custom-app
//
// export default function MyApp({
//   Component,
//   pageProps,
//   example,
// }: AppProps & AppOwnProps) {
//   return (
//     <>
//       <p>Data: {example}</p>
//       <Component {...pageProps} />
//     </>
//   )
// }
//
// MyApp.getInitialProps = async (
//   context: AppContext
// ): Promise<AppOwnProps & AppInitialProps> => {
//   const ctx = await App.getInitialProps(context)
//
//   return { ...ctx, example: 'data' }
// }

Alerts.getInitialProps = async (
  context: AppContext
// ): Promise<AppOwnProps & AppInitialProps> => {
): Promise<any> => {
  // debugger
  // const ctx = await App.getInitialProps(context)
  return new Promise(
   (res, rej) => {
    setTimeout(() => {
      res({ example: 'data' })
    }, 5000)
  }
  )

  return { /* ...ctx, */ example: 'data' }
}

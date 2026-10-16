import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:{default:'Minglecade — Come for the games. Stay for the people.',template:'%s | Minglecade'},description:'An independent collection of games, music rooms, and good times. Find your next favorite thing to play with friends.',openGraph:{title:'Minglecade',description:'Come for the games. Stay for the people.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

  return (

    <section className='App'>


      <TwitterFollowCard isFollowing={false} userName="admiral_sports">
        Admiral Sports
      </TwitterFollowCard>


      <TwitterFollowCard isFollowing userName="midudev" >
        Miguel Angel
      </TwitterFollowCard>



    </section>

  )



}
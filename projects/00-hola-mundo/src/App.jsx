import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



export function App() {


  const usersName = [

      {
       userName:"admiral_sports",
       following:false      
      },

      {
        userName:"midudev",
        following:true
      }

  ]




  return (

    <section className='App'>

      


      <TwitterFollowCard initialIsFollowing={false} userName="admiral_sports">
        Admiral Sports
      </TwitterFollowCard>


      <TwitterFollowCard initialIsFollowing userName="midudev" >
        Miguel Angel
      </TwitterFollowCard>



    </section>

  )



}
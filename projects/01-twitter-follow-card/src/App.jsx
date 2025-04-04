import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [

  {
    userName: 'admiral_sports',
    name: 'Admiral Sports',
    isFollowing: false
  },

  {
    userName: 'midudev',
    name: 'Miguelangel',
    isFollowing: true
  },

  {
    userName:'EducacionRDo',
    name: 'MINERD',
    isFollowing:true
  }

]


export function App() {

  return (

    <section className='App'>

      {
        users.map(user => {

          const { userName, name, isFollowing } = user

          return (
            <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing} key={userName}>
              {name}
            </TwitterFollowCard>
          )

        })

      }


    </section>

  )
}


import styles from '../styles/Components/Home.module.scss'
import Login from '../components/Login'
import Register from '../components/Register'
import Header from '../components/Header'
<<<<<<< HEAD
=======
import Search from '../components/Search'
import Hero from '../components/Hero'
import Card from '../components/Card'

import { useState, useEffect } from 'react'

// import Footer from '../components/Footer'
>>>>>>> b779c7c48d6dbc7d456431b7d98d98e8e2502aeb

export default function Home () {

  const [room, setRoom ] = useState([]);

  useEffect(() => {
   fetch('http://localhost:8080/api/rooms')
   .then(response => response.json())
   .then(data => setRoom(data))
  }, [])

  let [login, setLogin] = useState(false)
  let [register, setRegister] = useState(false)

  const showLoginModal = () => {

    setLogin((login = true));
    setRegister((register = false));
  };


  const hideLoginModal = () => {
    setLogin((login = false))
  }

  const showRegisterModal = () => {
    setRegister((register = true));
    setLogin((login = false));
  };


  const hideRegisterModal = () => {
    setRegister((register = false))
  }

  return (
    <div className={styles.container}>
      <Header />
      <Login show={login} handleClose={hideLoginModal} />
      <Register show={register} handleClose={hideRegisterModal} />
      <button type="button" onClick={showLoginModal}>
      Login
      </button>
      <button type="button" onClick={showRegisterModal}>
        Register
      </button>
      <Search />
      <Hero
        heroImage={'https://i.picsum.photos/id/943/600/500.jpg?hmac=FDXOi156vidMKBiwEiT5-oVIpP7X4dXd54S1-1xDQRM'}
      />
<<<<<<< HEAD
=======
      <main >
        <h1 className={styles.title}>Habitaciones disponibles</h1>
        <section className={styles.main}>
          { room.data?.map(item => (
            <Card key={item.id}{...item} />
          ))}
        </section>
      </main>
      <div className={styles.footer}>
        <h1>Footer</h1>
      </div>
>>>>>>> b779c7c48d6dbc7d456431b7d98d98e8e2502aeb
    </div>
  )
}

// const mapStateToProps = ({ eventReducer }) => eventReducer
// const mapDispatchToProps = {
//   getEventRecents
// }


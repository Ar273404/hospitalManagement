import React from 'react'
import Hero from '../components/Hero'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'
import HowitWork from '../components/HowitWork'
const Home = () => {
  return (
    <div>
      <Hero
        title={
          "Welcome to Arun Medical Insitute | Your Trusted HealthCare Provider"
        }
        imageURL={"/hero.png"}
      />
      <Department />
      <HowitWork />
      <MessageForm />
    </div>
  );
}

export default Home;
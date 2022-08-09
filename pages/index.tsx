import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Slider from "../components/Slider";
import { MainContainer } from "../styles/globel.style";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Slider />
        <MainContainer>
          <h1>Hi This is my home page </h1>
        </MainContainer>
      </Layout>
    </>
  )
}

export default Home

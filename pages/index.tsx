import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Slider />
        <h1>Hi This is my home page </h1>
      </Layout>
    </>
  )
}

export default Home

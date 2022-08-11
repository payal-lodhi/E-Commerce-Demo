import type { NextPage } from 'next'
import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout'
import Slider from "../components/Slider";
import OfferingProduct from "../components/OfferingProduct"
import FeaturedProduct from "../components/FeaturedProduct"

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Slider />
        <Container>
          <OfferingProduct />
        </Container>
        <FeaturedProduct />
      </Layout>
    </>
  )
}

export default Home

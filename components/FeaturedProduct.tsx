import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ProductsState } from "../context/Context";

import { FaRupeeSign } from "react-icons/fa"
import { MdStarRate } from "react-icons/md"

const FeaturedProduct = () => {
    const { state, dispatch } = ProductsState();
    const { featuredProducts } = state ? state : [];

    const imgHeight = {
        maxHeight: '240px'
    }

    return (
        <>
            <section className="bg-light">
                <Container className="py-5">
                    <Row className="text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Product</h1>
                            <p>
                                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        {
                            featuredProducts ? featuredProducts.map((item: any, index: number) => <div className="col-12 col-md-3 mb-4" key={index}>
                                <div className="card h-100">
                                    <Link href="/products"><a>
                                        <img src={item.image} className="card-img-top" style={imgHeight} alt="..." />
                                    </a>
                                    </Link>
                                    <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <i className="text-warning">
                                                    <MdStarRate />
                                                </i>
                                                <i className="text-warning">
                                                    <MdStarRate />
                                                </i>
                                                <i className="text-warning">
                                                    <MdStarRate />
                                                </i>
                                                <i className="text-muted">
                                                    <MdStarRate />
                                                </i>
                                                <i className="text-muted">
                                                    <MdStarRate />
                                                </i>
                                            </li>
                                            <li className="text-right"><FaRupeeSign /> {item.price}</li>
                                        </ul>
                                        <Link href="/products"><a className="h5 text-decoration-none text-dark"><b>{item.title}</b></a></Link>
                                        <p className="card-text">
                                            {item.description.substring(0, 100)}...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            ) : (<p>Loading...</p>)
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FeaturedProduct;
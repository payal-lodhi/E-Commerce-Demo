import Link from "next/link";
import { ProductsState } from "../context/Context";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const OfferingProduct = () => {
    const { state, dispatch } = ProductsState();
    const { categories } = state ? state : [];

    const imgStyle = {
        width: "200px",
        height: "200px"
    }

    const ImagesUrls: string[] = [
        "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    ]

    return (
        <>
            <Container className="py-5">
                <Row className="text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Categories of The Month</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Row>
                <Row>
                    {categories ? (
                        categories.map((itemName: any, index: number) => <div className="col-12 col-md-3 col-sm-6 p-3 mt-3 d-flex  flex-column align-items-center" key={index}>
                            <img src={ImagesUrls[index]} style={imgStyle} className="rounded-circle img-fluid border" />
                            <h5 className="text-center mt-3 mb-3">{itemName}</h5>
                            <p className="text-center"><Link href="/products"><Button variant="success">Go Shop</Button></Link></p>
                        </div>)
                    ) : (
                        <p> loading....</p>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default OfferingProduct;
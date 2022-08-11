import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Link href='/products'>
                    <a>
                        <img
                            className="d-block w-100"
                            src="https://static.thcdn.com/images/xlarge/webp/widgets/138-en/02/original-Lash_Curler_WYB_a_Mascara_GWP_-_Untitled_Page_%281%29-035002.png"
                            alt="First slide"
                        />
                    </a>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link href='/products'>
                    <a>
                        <img
                            className="d-block w-100"
                            src="https://static.thcdn.com/images/xlarge/webp/widgets/138-en/46/original-0622-STDCRE-37806-Eyeko-SP-Mascara-3-v2-081446.jpg"
                            alt="Second slide"
                        />
                    </a>
                </Link>
            </Carousel.Item>
        </Carousel>
    )

}

export default Slider;
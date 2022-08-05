import Link from "next/link";

const Header = () => {
    return (
        <>
            <h1>Header</h1>
            <p><Link href='/'><a>Home</a></Link></p>
            <p><Link href='/product'><a>Product</a></Link></p>
        </>
    )
}

export default Header;
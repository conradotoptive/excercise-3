import Products from "../../components/product/Products";
import ProductsPaginator from "../../components/shared/ProductsPaginator";

const ProductsPage = () => {
        
    return (
        <>
            <div className="center">
                <h1 className="title">
                   Product catalogue
                </h1>
                <Products/>
                <ProductsPaginator/>
            </div>
        </>
    )
}

export default ProductsPage

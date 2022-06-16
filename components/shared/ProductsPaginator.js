import { connect, useDispatch } from "react-redux";
import { requestActiveProducts } from "../../store/slices/products/action";

const ProductsPaginator = ({ products }) => {

    const dispatch = useDispatch();
    const totalPages = products.totalPages;
    const currentPage = products.currentPage;

    const handlePageClick = (page) => {
        dispatch(requestActiveProducts(page));
    }

    const handlePreviousPageClick = () => {
        if (currentPage > 1) {
            dispatch(requestActiveProducts(currentPage - 1));
        }
    }

    const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            dispatch(requestActiveProducts(currentPage + 1));
        }
    }

    const renderPreviousPageButton = () => {
        if (currentPage === 1) {
            return null;
        }
        return (
            <>
                <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={() => handlePreviousPageClick()}>
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
            </>
        )
    }

    const renderNextPageButton = () => {
        if (currentPage === totalPages) {
            return null;
        }
        return (
            <>
                <li className="page-item">
                   <button className="page-link" aria-label="Next" onClick={() => handleNextPageClick()}>
                        <span aria-hidden="true">&raquo;</span>
                   </button>
                </li>
            </>
        )
    }

    const renderPageNumbers = () => {
        let pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers.map(number => {
            return (
                <>
                    {number === currentPage ?
                    <li key={number} className="page-item active">
                        <button className="page-link" onClick={() => handlePageClick(number)}>{number}</button>
                    </li>
                    :
                    <li key={number} className="page-item">
                        <button className="page-link" onClick={() => handlePageClick(number)}>{number}</button>
                    </li>
                    }
                </>
            );
        })
    }

    return (
        <nav aria-label="Page navigation example">
            <br/>
            <ul className="pagination justify-content-center">
                {renderPreviousPageButton()}
                {renderPageNumbers()}
                {renderNextPageButton()}
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps)(ProductsPaginator);
import { connect, useDispatch } from "react-redux";
import { requestCartItems } from "../../store/slices/cart/action";

const CartPaginator = ({ items }) => {

    const dispatch = useDispatch();
    const totalPages = items.totalPages;
    const currentPage = items.currentPage;

    const handlePageClick = (page) => {
        dispatch(requestCartItems(page));
    }

    const handlePreviousPageClick = () => {
        if (currentPage > 1) {
            dispatch(requestCartItems(currentPage - 1));
        }
    }

    const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            dispatch(requestCartItems(currentPage + 1));
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
        items: state.cart,
    };
};

export default connect(mapStateToProps)(CartPaginator);
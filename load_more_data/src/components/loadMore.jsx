import { useEffect, useState } from "react";
// import { Text } from 'react-native';
import './loadMore.css';

export default function LoadMoreData({ url }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [showMore, setShowMore] = useState(false);

    async function loadMoreProducts() {
        if (skip <= total) {
            try {
                setLoading(true);
                fetch(`${url}?limit=10&skip=${skip}`).then(response => {
                    if (!response.ok) {
                        setErrorMsg('Unable to get products. Please try again later');
                    }
                    else {
                        return response.json();
                    }
                }).then(data => {
                    if (data) {
                        setProducts([...products, ...data.products]);
                        setSkip(skip + 10);
                    }

                })
            } catch (e) {
                setErrorMsg(e.message);
            } finally {
                setLoading(false);
            }
        }
        else {
            setShowMore(false);
        }
    }

    useEffect(() => {
        try {
            setLoading(true);
            fetch(`${url}?limit=10`).then(response => {
                if (!response.ok) {
                    setErrorMsg('Unable to get products. Please try again later');
                }
                else {
                    return response.json();
                }
            })
                .then(data => {
                    if (data) {
                        console.log(data);
                        setProducts(data.products);
                        // setLoading(false);
                        setSkip(10);
                        setTotal(data.total);
                        setShowMore(true);
                    }
                })
        } catch (e) {
            setErrorMsg(e.message);
        } finally {
            setLoading(false);
        }
    }, []);
    return <div>

        <div className="container">
            <div className="productsGridContainer">
                {
                    products && products.length > 0 ?
                        products.map((item) => (
                            <div id={item.id} className="productsDetailsContainer">
                                <img src={item.images[0]} alt={item.title} className="productImg" />
                                <h3 className="noMargin">{item.title}</h3>
                                <p className="noMargin noOverflow">{item.description}</p>
                                <h4 className="noMargin">Price: {item.price}</h4>
                            </div>
                        ))
                        : null
                }
            </div>
            {
                products && products.length > 0 && showMore ?
                    <button className="loadBtn" onClick={loadMoreProducts}>Load More</button> : null

            }
        </div>
    </div>;
}
import useFetch from "../use-fetch";
import useFetchHook from "../use-fetch/test";


export default function ScrollFunctionality() {
    const { data, error, loading } = useFetch('https://dummyjson.com/products');
    // const [scroll, setScroll] = useState(0);

    function handleScrollTop() {
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        });
    }
    function handleScrollBottom() {
        window.scrollTo({
            top: document.body.scrollHeight, left: 0, behavior: "smooth"
        });
    }
    return <div>
        <h1>Scroll Top and Bottom</h1>
        <button onClick={handleScrollBottom}>Scroll to bottom</button>
        {
            loading ? 'Please wait...' : null
        }
        {
            error ? <h3>{error}</h3> : null
        }
        {
            data && data.products && data.products.length > 0 ?
                data.products.map(item => (
                    <p key={item.key}>{item.title}</p>
                ))
                : null
        }
        <button onClick={handleScrollTop}>Scroll to top</button>
    </div>
}
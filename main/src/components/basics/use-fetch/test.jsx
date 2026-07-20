import useFetch from ".";

// Calling objects from another file 
export default function useFetchHook() {
    const { data, error, loading } = useFetch('https://dummyjson.com/products');

    console.log(error, data, loading);
    return <div>
        <h1>useFetch Hook</h1>
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
    </div>;
}
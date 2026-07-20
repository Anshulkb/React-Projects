import { useEffect, useState } from "react";
import './progress.css';

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    async function fetchData(siteUrl) {
        setLoading(true);
        try {
            const response = await fetch(siteUrl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                console.log(data.products);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }
    function handleScrollProgress() {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );
        const top = document.body.scrollTop ||
            document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollProgress = Math.round((top / height) * 100);

        setScrollProgress(scrollProgress);
        console.log(scrollProgress);
    }
    useEffect(() => {
        fetchData(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollProgress);

        return () => {
            window.removeEventListener('scroll', {});
        }
    }, []);

    return <div>
        <div className="header-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-indicator-container">
                <div className="scroll-progress-indicator" style={{ width: `${scrollProgress}%` }}>

                </div>

            </div>
        </div>
        <div className="content-container">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <p>{dataItem.title}</p>)
                    : null
            }
        </div>
    </div>;
}
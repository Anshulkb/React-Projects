import WindowResize from "."


export default function WindowResizeHook() {

    const windowSize = WindowResize();
    const { width, height } = windowSize;
    return <div>Window resize hook
        <p>
            Width is {width}
        </p>
        <p>
            Height is {height}
        </p>
    </div>
}
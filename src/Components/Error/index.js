import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <>
        <h1>Error!!!! OOOOPPPPSSS!!!!</h1>
        <h2>{err.error.message}</h2>
        </>
    )
}
export default Error;
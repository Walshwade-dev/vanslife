

import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    console.log(error);

    return(
        <div className="text-xl flex flex-col justify-center items-center mt-[20%]">
            <pre className="w-1/2">Error: {error.message}</pre>
            <div><pre>{error.status} - {error.statusText}</pre></div>
        </div>
    )
}
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-5xl font-bold ">
                <h1 className="text-center text-blue-400">Oops!</h1>
                <p>Sorry, an unexpected error has occurred❌</p>
               <div className="text-center">
               <Link to={'/'}>
                    <button className="btn btn-primary">Back</button>
                </Link>

               </div>
            </div>

        </div>
    );
};

export default ErrorPage;
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-6">
        <div className="text-center">
          <p className="text-9xl font-semibold text-secondary">404</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-4 text-lg leading-8">
            Opps! We can't seem to find the page you are looking for it!
          </p>
          <div className="mt-8">
            <Link to="/" className="btn btn-accent">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="grid min-h-[100vh] place-items-center px-6">
        <h4 className="text-center font-bold text-4xl">
          Internal Server Error Occured
        </h4>
      </main>
    );
  }
};

export default ErrorPage;

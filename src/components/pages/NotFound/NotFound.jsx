import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2 className='fs-1 mb-4 text-center'>404</h2>
      <Link to='/'>Вернуться на первую страницу</Link>
    </div>
  );
};

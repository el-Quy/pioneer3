import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/pages/_NotFoundPage.scss';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="error-code">404</h1>

        <h2 className="error-title">
          Dude . . .
          <br />
          Just Stop!
        </h2>

        <Link to="/" className="home-link">
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;

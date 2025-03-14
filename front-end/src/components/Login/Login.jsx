import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // New state for success modal
  const navigate = useNavigate();

  const API_URL = 'http://localhost:5000';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!username || !password) {
      setError('Username and password are required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      let data;
      try {
        data = await response.json();
      } catch (err) {
        throw new Error('Invalid server response');
      }

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);

      console.log('Login successful!');
      setSuccess(true); // Show success modal
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = () => {
    navigate('/blog/new'); // Navigate to Create Post page
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to Home page
  };

  return (
    <>
      {/* Full-Screen Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span className="text-white text-lg font-medium">Logging in...</span>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Login was successful!</h2>
            <div className="space-y-2">
              <button
                onClick={handleCreatePost}
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Create a New Blog Post
              </button>
              <button
                onClick={handleGoHome}
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition"
              >
                Go to Home Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Form */}
      <div className="relative px-4 mx-auto py-52 max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          {error && (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <form
            onSubmit={handleLogin}
            className="p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-lg font-medium text-center text-[#136c9d]">Sign in to your account</p>

            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                placeholder="Enter username"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                placeholder="Enter password"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-[#146a9e] rounded-lg hover:bg-[#2e3665] transition"
              disabled={loading}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

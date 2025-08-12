import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../supabaseClient'; // Import supabase client

const AuthPage = () => {
    const [isLoginView, setIsLoginView] = useState(true);
    const { signIn, signUp } = useAuth();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const handleAuthAction = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage('');

        try {
            let authPromise;
            if (isLoginView) {
                authPromise = signIn({ email, password });
            } else {
                authPromise = signUp({ email, password });
            }

            const { error } = await authPromise;

            if (error) throw error;

            if (isLoginView) {
                navigate('/');
            } else {
                setMessage('Sikeres regisztráció! Kérlek, erősítsd meg az email címedet a bejelentkezés előtt.');
                setEmail('');
                setPassword('');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        setError(null);
        setMessage('');
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
            if (error) throw error;
            // Supabase handles the redirect, so no need for navigate here
        } catch (err) {
            setError(err.message);
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setError(null);
        setMessage('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-white">
                    {isLoginView ? 'Bejelentkezés' : 'Regisztráció'}
                </h1>

                {error && <p className="text-red-500 text-center font-semibold bg-red-100 p-2 rounded">{error}</p>}
                {message && <p className="text-green-500 text-center font-semibold bg-green-100 p-2 rounded">{message}</p>}

                <form onSubmit={handleAuthAction} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Jelszó</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition duration-200">
                        {isLoginView ? 'Bejelentkezés' : 'Regisztráció'}
                    </button>
                </form>

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">VAGY</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200 flex items-center justify-center"
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.24 10.24v2.4h3.28c-.16 1.04-.72 1.84-1.6 2.4-.88.56-2.08.88-3.28.88-2.72 0-4.96-2.24-4.96-4.96s2.24-4.96 4.96-4.96c1.44 0 2.72.64 3.68 1.6l1.92-1.92c-1.28-1.28-2.96-1.92-4.8-1.92-4.16 0-7.52 3.36-7.52 7.52s3.36 7.52 7.52 7.52c4.16 0 7.2-2.88 7.2-7.2 0-.48-.08-.96-.16-1.44h-7.04z"/>
                    </svg>
                    Bejelentkezés Google-lel
                </button>

                <p className="text-center text-gray-400 cursor-pointer" onClick={toggleView}>
                    {isLoginView 
                        ? "Nincs még fiókod? Regisztrálj itt!" 
                        : "Már van fiókod? Jelentkezz be!"}
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
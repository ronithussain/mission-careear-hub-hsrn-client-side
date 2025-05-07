import useAuth from "../../../hooks/useAuth";


const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="my-8">
            <button 
            onClick={handleGoogleLogin}
            className="btn w-full flex items-center justify-center gap-2 px-4 py-6 rounded-lg transition "
            >
                Sign in with Google

            </button>
        </div>
    );
};

export default SocialLogin;
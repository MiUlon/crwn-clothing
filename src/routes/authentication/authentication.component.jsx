import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const authentication = () => {
    return (
        <div>
            <h1>This is Sign In page</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default authentication;
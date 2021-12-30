import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton(props: SubscribeButtonProps) {
    const { priceId } = props;
    const { data: session } = useSession()

    function handleSubscribe() {
        if (!session) {
            signIn('github');
            return;
        }

        
    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            hello
        </button>
    )
}
import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton(props: SubscribeButtonProps) {
    const { priceId } = props;
    const { data: session } = useSession()

    async function handleSubscribe() {
        if (!session) {
            signIn('github');
            return;
        }

        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data;
            console.log('sessionId', sessionId)
            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId: sessionId.id })

        } catch (err) {
            alert(err.message)
        }

    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}
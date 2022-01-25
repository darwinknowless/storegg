import jwtDecode from 'jwt-decode';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import {
	HistoryTransactionTypes,
	JWTPayloadTypes,
	UserTypes,
} from '../../../services/data-types';
import { getTransactionDetail } from '../../../services/member';

interface TransactionDetailProps {
	transactionDetail: HistoryTransactionTypes;
}

export default function TransactionDetail(props: TransactionDetailProps) {
	// console.log('detail: ', transactionDetail);
	const { transactionDetail } = props;
	return (
		<section className='transactions-detail overflow-auto'>
			<TransactionDetailContent data={transactionDetail} />
		</section>
	);
}

interface GetServerSideProps {
	req: {
		cookies: {
			token: string;
		};
	};
	params: {
		idTrx: string;
	};
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
	// console.log('params: ', params);
	const { idTrx } = params;
	const { token } = req.cookies;

	if (!token) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	const jwtToken = Buffer.from(token, 'base64').toString('ascii'); // server side
	const payload: JWTPayloadTypes = jwtDecode(jwtToken);
	const userFromPayload: UserTypes = payload.player;
	const IMG = process.env.NEXT_PUBLIC_IMG;
	userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
	const response = await getTransactionDetail(idTrx, jwtToken);
	// console.log('data: ', response);

	return {
		props: {
			transactionDetail: response.data,
		},
	};
}

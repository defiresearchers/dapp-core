import React from 'react';

import { N_A } from 'constants/index';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { getTransactionFee } from 'utils/transactions/transactionInfoHelpers/getTransactionFee';
import { stringIsInteger } from 'utils/validation/stringIsInteger';

import { WithTransactionType } from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoFee = ({ transaction }: WithTransactionType) => {
  const egldLabel = getEgldLabel();
  const txFee = getTransactionFee(transaction);

  const transactionFee =
    txFee && stringIsInteger(txFee)
      ? formatAmount({
          input: txFee,
          showLastNonZeroDecimal: true
        })
      : N_A;

  const price =
    transaction.price != null
      ? getUsdValue({
          amount: transactionFee,
          usd: transaction.price,
          decimals: 4,
          addEqualSign: true
        })
      : N_A;

  const fee =
    transaction.gasUsed != null ? (
      <>
        {transactionFee} {egldLabel}{' '}
        <span className={styles.price}>({price})</span>
      </>
    ) : (
      <span className={styles.price}>{N_A}</span>
    );

  return (
    <DetailItem title='Transaction Fee' className={styles.fee}>
      <span data-testid='transactionInfoFee'>{fee}</span>
    </DetailItem>
  );
};

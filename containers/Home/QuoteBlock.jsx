import React from 'react';
import compose from '../../utils/compose';

const QuoteBlock = ({ quote }) => {
  return (
    <>
      <p style={{ color: '#fff', textAlign: 'center', padding: '12px 0 4px 0' }}>
        {quote.text}
      </p>
      <p style={{ color: '#fff', textAlign: 'center', padding: '0 0 12px 0' }}>
        —— {quote.author}「{quote.from}」
      </p>
    </>
  )
}

export default compose(
  React.memo
)(
  QuoteBlock
);
import React from 'react';
import {Row, Col} from 'react-bootstrap';

const styles = {
  errorMsg: {
    display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center'
  }
}

class ErrorMessage extends React.Component {
  render() {
    return (
      <Row>
        <h1 style={styles.errorMsg}>Some issue with the server. Please try again later</h1>
      </Row>
    );
  }
}

export default ErrorMessage;

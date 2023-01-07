import React, { FC } from 'react';
import { Alert } from 'react-bootstrap';

interface IProps {
  variant: string;
  children: React.ReactNode;
}

const AlertMessage: FC<IProps> = ({ variant = 'primary', children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default AlertMessage;

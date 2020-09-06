import React, { useCallback } from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';
import { ToastMessage, useToast } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

  const { removeToast } = useToast();

  return (
    <Container>

      { messages.map((message) => (
        <Toast hasDescription={!!message.description}
               key={message.id}
               type={message.type}>
          <FiAlertCircle size={20} />

          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button type="button" onClick={() => removeToast(message.id)}>
            <FiXCircle size={18} />
          </button>

        </Toast>
      ))}

    </Container>
  );
}

export default ToastContainer;

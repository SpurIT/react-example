import { FC } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    node?: Element | DocumentFragment;
}
export const Portal: FC<PortalProps> = (props) => {
    const { children, node } = props;
    return ReactDOM.createPortal(children, node || document.body);
};

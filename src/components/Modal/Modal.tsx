import { Modal as AntModal } from 'antd'
import type { ModalProps as AntModalProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type ModalProps = AntModalProps

/**
 * Modal — displays content in a layer above the page.
 * Built on Ant Design Modal with Flock DS tokens via FlockProvider.
 * Uses Flock close icon by default.
 */
export const Modal = ({ closeIcon, ...props }: ModalProps) => (
  <AntModal
    closeIcon={closeIcon ?? <FlockIcons.Close />}
    {...props}
  />
)

/** Static methods — Modal.confirm, Modal.info, etc. */
Modal.useModal = AntModal.useModal
Modal.confirm = AntModal.confirm
Modal.info = AntModal.info
Modal.success = AntModal.success
Modal.warning = AntModal.warning
Modal.error = AntModal.error
Modal.destroyAll = AntModal.destroyAll

export default Modal

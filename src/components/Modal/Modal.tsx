
import { useOutsideClick } from './hooks/useOutsideClick'

interface QuickModalProps {
  children: React.ReactNode
  closeAction: () => void
  avoidClickOutsideClose?: boolean
  showCloseButton?: boolean
  className?: string
}

export function Modal({
  children,
  className,
  closeAction,
  avoidClickOutsideClose = false,
  showCloseButton = true
}: QuickModalProps) {
  const modalBodyRef = useOutsideClick(
    !avoidClickOutsideClose ? closeAction : () => null
  )
  return (
    <div
      className={`fixed   left-0 top-0 z-30 flex h-[100vh] w-[100vw] items-center justify-center bg-black bg-opacity-60 ${
        avoidClickOutsideClose ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <div
        className={`relative inline-flex max-h-[85vh] max-w-[80%]  cursor-default flex-col rounded-xl bg-white px-8 py-8 ${className}`}
        ref={modalBodyRef}
      >
        {showCloseButton && (
          <div data-testid='close-modal-btn' onClick={closeAction}>
           x
          </div>
        )}

        <div className='overflow-y-auto  overflow-x-hidden'>{children}</div>
  
      </div>
    </div>
  )
}

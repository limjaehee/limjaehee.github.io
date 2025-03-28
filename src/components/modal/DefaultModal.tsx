import React, {
  ReactNode,
  useState,
  useEffect,
  forwardRef,
  useRef,
} from 'react'
import ModalBackground from 'components/modal/ModalBackground'
import * as S from 'components/modal/DefaultModal.style'
import { CSSTransition } from 'react-transition-group'
import { DefaultModal as DefaultModalType } from 'types/defaultModal'
import { useModal } from 'contexts/DefaultModalContext'

interface ModalProps {
  id: string
  children: ReactNode
}

// forwardRef를 사용하여 ref를 받을 수 있도록 설정
const DefaultModal = forwardRef<HTMLDivElement, ModalProps>(
  ({ id, children }, ref) => {
    const { modals } = useModal()

    const [modal, setModal] = useState<DefaultModalType | null>(null)
    const [show, setShow] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
      const findModal = modals.find(item => item.id === id)

      if (findModal) {
        setModal(findModal)
        setShow(true) // 트랜지션 활성화
      } else {
        setShow(false) // 트랜지션 비활성화
      }
    }, [id, modals])

    return (
      <>
        {modal?.hasBackground && (
          <ModalBackground zIndex={modal.zIndex} ref={ref} id={modal.id} />
        )}
        <CSSTransition
          in={show}
          timeout={200}
          classNames="custom-fade-slide"
          unmountOnExit
          nodeRef={modalRef}
        >
          <S.Modal id={id} $zIndex={modal?.zIndex || 0} ref={modalRef}>
            {children}
          </S.Modal>
        </CSSTransition>
      </>
    )
  },
)

// forwardRef의 displayName 설정 (디버깅 시 컴포넌트 이름 확인 용도)
DefaultModal.displayName = 'DefaultModal'

export default DefaultModal

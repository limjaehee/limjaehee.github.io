import React, { useRef } from 'react'
import DefaultModal from 'components/modal/DefaultModal'
import { useModal } from 'contexts/DefaultModalContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function DefaultModalRenderer() {
  const { modals } = useModal()

  const nodeRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>(
    {},
  )

  return (
    <TransitionGroup>
      {modals.map(modal => {
        if (!nodeRefs.current[modal.id]) {
          nodeRefs.current[modal.id] = React.createRef()
        }

        return (
          <CSSTransition
            key={modal.id}
            timeout={200}
            classNames="custom-fade"
            nodeRef={nodeRefs.current[modal.id]}
          >
            <DefaultModal id={modal.id} ref={nodeRefs.current[modal.id]}>
              {modal.content}
            </DefaultModal>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

export default DefaultModalRenderer

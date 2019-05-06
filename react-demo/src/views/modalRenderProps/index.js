import React from 'react'
import HelloModal from './HelloModal'
import ModalContainer from './modalContainer'
import { Button } from 'antd'

export default {
  path: '/modalRenderProps',
  exact: true,
  component: () => (
    <ModalContainer>
      {modal => (
        <div>
          <HelloModal visible={modal.visible} handleHide={modal.hide} />
          <Button type='primary' onClick={modal.show}>
            Click me!
          </Button>
        </div>
      )}
    </ModalContainer>
  )
}

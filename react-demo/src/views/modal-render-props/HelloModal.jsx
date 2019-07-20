import React from 'react'
import { Modal } from 'antd'

export default ({ visible, handleHide }) => (
  <Modal
    visible={visible}
    title='Hello'
    onOk={handleHide}
    onCancel={handleHide}
  >
    World!
  </Modal>
)

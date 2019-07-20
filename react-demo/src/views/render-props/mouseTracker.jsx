import React from 'react'
import Mouse from './mouse'
import Logo from '../hoc/logo'

export default () => <Mouse render={mouse => <Logo mouse={mouse} />} />

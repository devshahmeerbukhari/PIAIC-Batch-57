'use client'
import { store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

function ReduxProvider({children}: any) {
  return (
    <div>
      <Provider store={store}>
        <div>
          {children}
        </div>
      </Provider>
    </div>
  )
}
export default ReduxProvider
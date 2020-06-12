import { useSelector, TypedUseSelectorHook } from 'react-redux'

interface RootState {
  element: {
    loading: true,
    alternativesElements: [],
    content: {},
    msgError: ''
  }
}

export const useElementSelector: TypedUseSelectorHook<RootState> = useSelector

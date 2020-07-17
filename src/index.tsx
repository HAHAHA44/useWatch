import * as React from 'react'
import styles from './styles.module.css'
export { useWatch } from './hooks/useWatch'
interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

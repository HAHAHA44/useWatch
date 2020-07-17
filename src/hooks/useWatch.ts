import * as React from 'react'

export const useWatch = <T>(
  target: T,
  callback: (newValue: T, oldValue: T) => void
) => {
  const [oldValue, setOldValue] = React.useState(target)
  React.useEffect(() => {
    callback(target, oldValue)
    setOldValue(target)
  }, [target])
}

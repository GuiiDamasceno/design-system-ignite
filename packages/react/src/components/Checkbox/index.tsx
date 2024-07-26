import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndication } from './styles'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndication asChild>
        <Check weight="bold" />
      </CheckboxIndication>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'

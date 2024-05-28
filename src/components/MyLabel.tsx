import './MyLabel.css'

interface Props {
  /** label */
  label: string

  /** label size*/
  size?: 'normal' | 'h1' | 'h2' | 'h3'

  /** capitalize all letters */
  allCaps?: boolean

  /** label color */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

  /** font color */
  fontColor?: string

  /** */
  backgroundColor?: string
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false, 
  color,
  fontColor,
  backgroundColor = 'transparent'
}: Props) => {
  return (
    <span className={`${size} ${color}`} style={{color: fontColor, backgroundColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

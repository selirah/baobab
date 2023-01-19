import { useContext } from 'react'
import { ColorContext, ColorTypes } from 'contexts'
import { MdOutlineColorLens } from 'react-icons/md'

export const ColorSwitcher = () => {
  const { color, changeColor } = useContext(ColorContext)

  const onSwitchColor = (color: ColorTypes) => {
    changeColor(color)
    localStorage.setItem('color', color)
  }

  return (
    <div className="">
      {color === 'uat' ? (
        <MdOutlineColorLens
          className="text-pLarge text-primary cursor-pointer"
          onClick={() => onSwitchColor('prod')}
        />
      ) : (
        <MdOutlineColorLens
          className="text-pLarge text-primary cursor-pointer"
          onClick={() => onSwitchColor('uat')}
        />
      )}
    </div>
  )
}

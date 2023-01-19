import { HiOutlineUserGroup } from 'react-icons/hi2'
import { AiOutlineDashboard } from 'react-icons/ai'
import { MdCreditCard } from 'react-icons/md'
export type SubMenuTypes = {
  title: string
  link: string
  IconSVG?: React.FC<React.SVGProps<SVGSVGElement>>
  scope?: string
}

export type MenuTypes = {
  id: number
  menuTitle: string
  IconSVG: React.FC<React.SVGProps<SVGSVGElement>>
  link?: string
  subLinks?: SubMenuTypes[]
  scope?: string
  spacing?: boolean
}

export const Routes: MenuTypes[] = [
  {
    id: 1,
    menuTitle: 'Dashboard',
    IconSVG: AiOutlineDashboard,
    link: '/admin/dashboard',
    scope: 'Dashboard'
  },
  {
    id: 2,
    menuTitle: 'Cards Management',
    IconSVG: MdCreditCard,
    link: '/admin/cards-management',
    scope: 'Cards',
    spacing: true
  },
  {
    id: 11,
    menuTitle: 'User & Roles',
    IconSVG: HiOutlineUserGroup,
    link: '/admin/user-roles',
    scope: 'UserRoles'
  }
]

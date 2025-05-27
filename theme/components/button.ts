import { mode } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

export default {
  variants: {
    'nav-link': (props: Dict) => {
      const { isActive } = props

      const activeColor = 'green.500'
      const hoverColor = mode('green.600', 'green.300')(props)

      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive ? activeColor : mode('gray.700', 'whiteAlpha.700')(props),
        transition: 'all 0.3s ease-in-out',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
          transform: 'scale(1.05)',
        },
        _active: {
          transform: 'scale(0.95)',
        },
      }
    },
  },
}

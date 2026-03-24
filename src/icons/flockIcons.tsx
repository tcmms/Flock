/**
 * Flock DS icon aliases — maps semantic names to Figma-exported icons.
 * Use these in component props and stories instead of raw icon names.
 */
import {
  InterfaceEssentialArrowDownIcon,
  InterfaceEssentialArrowUpIcon,
  InterfaceEssentialSearchLoupeIcon,
  DesignToolsEyeShowVisibleIcon,
  InterfaceEssentialEyeCross1Icon,
  InterfaceEssentialCrossDeleteCircleIcon,
  ContentEditCalendarPagesIcon,
  InterfaceEssentialAlarmClockIcon,
  InterfaceEssentialCloudUploadIcon,
  UserSingleUserIcon,
  InterfaceEssentialItemCheckmarkIcon,
  InterfaceEssentialInfoInformationCircleIcon,
  InterfaceEssentialWarningAlarmIcon,
  ContentEditPlusAddIcon,
  ArrowsDiagramsArrowBackwardIcon,
  ArrowsDiagramsArrowForwardIcon,
  InterfaceEssentialFilterSortIcon,
  InterfaceEssentialStarIcon,
} from './index'

const iconStyle = { fontSize: '1em' }

export const FlockIcons = {
  ArrowDown: () => <InterfaceEssentialArrowDownIcon style={iconStyle} />,
  ArrowUp: () => <InterfaceEssentialArrowUpIcon style={iconStyle} />,
  Search: () => <InterfaceEssentialSearchLoupeIcon style={iconStyle} />,
  EyeShow: () => <DesignToolsEyeShowVisibleIcon style={iconStyle} />,
  EyeHide: () => <InterfaceEssentialEyeCross1Icon style={iconStyle} />,
  Close: () => <InterfaceEssentialCrossDeleteCircleIcon style={iconStyle} />,
  Calendar: () => <ContentEditCalendarPagesIcon style={iconStyle} />,
  Clock: () => <InterfaceEssentialAlarmClockIcon style={iconStyle} />,
  Upload: () => <InterfaceEssentialCloudUploadIcon style={iconStyle} />,
  User: () => <UserSingleUserIcon style={iconStyle} />,
  Check: () => <InterfaceEssentialItemCheckmarkIcon style={iconStyle} />,
  Info: () => <InterfaceEssentialInfoInformationCircleIcon style={iconStyle} />,
  Warning: () => <InterfaceEssentialWarningAlarmIcon style={iconStyle} />,
  Error: () => <InterfaceEssentialCrossDeleteCircleIcon style={iconStyle} />,
  Plus: () => <ContentEditPlusAddIcon style={iconStyle} />,
  ArrowLeft: () => <ArrowsDiagramsArrowBackwardIcon style={iconStyle} />,
  ArrowRight: () => <ArrowsDiagramsArrowForwardIcon style={iconStyle} />,
  Filter: () => <InterfaceEssentialFilterSortIcon style={iconStyle} />,
  Star: () => <InterfaceEssentialStarIcon style={iconStyle} />,
} as const

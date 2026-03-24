import { Pagination as AntPagination } from 'antd'
import type { PaginationProps as AntPaginationProps } from 'antd'
import { FlockIcons } from '../../icons/flockIcons'

export type PaginationProps = AntPaginationProps

/**
 * Pagination — page-based navigation for large data sets.
 * Built on Ant Design Pagination with Flock DS tokens via FlockProvider.
 * Uses Flock arrow icons for prev/next navigation.
 */
export const Pagination = ({
  prevIcon,
  nextIcon,
  jumpPrevIcon,
  jumpNextIcon,
  ...props
}: PaginationProps) => (
  <AntPagination
    prevIcon={prevIcon ?? <FlockIcons.ArrowLeft />}
    nextIcon={nextIcon ?? <FlockIcons.ArrowRight />}
    jumpPrevIcon={jumpPrevIcon ?? <FlockIcons.ArrowLeft />}
    jumpNextIcon={jumpNextIcon ?? <FlockIcons.ArrowRight />}
    {...props}
  />
)

export default Pagination

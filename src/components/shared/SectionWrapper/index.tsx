import { cn } from '@/lib/cn'

type TagName = 'section' | 'div' | 'article'

interface SectionWrapperProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  as?: TagName
  'aria-label'?: string
}

export function SectionWrapper({
  id,
  className,
  style,
  children,
  as: Tag = 'section',
  'aria-label': ariaLabel,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('relative w-full', className)} style={style} aria-label={ariaLabel}>
      {children}
    </Tag>
  )
}

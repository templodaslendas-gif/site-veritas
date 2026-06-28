import { cn } from '@/lib/cn'

type TagName = 'section' | 'div' | 'article'

interface SectionWrapperProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  as?: TagName
}

export function SectionWrapper({
  id,
  className,
  style,
  children,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('relative w-full', className)} style={style}>
      {children}
    </Tag>
  )
}

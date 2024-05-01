import { Breadcrumb } from '@/features/products'

interface BreadcrumbsProps {
  data: Breadcrumb[]
  crumbName: string
  crumbHref: string
}
const Breadcrumbs = ({ data, crumbName, crumbHref }: BreadcrumbsProps) => {
  return (
    <nav aria-label='Breadcrumb'>
      <ol
        role='list'
        className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
      >
        {data.map(({ id, name, href }) => (
          <li key={id}>
            <div className='flex items-center'>
              <a href={href} className='mr-2 text-sm font-medium text-gray-900'>
                {name}
              </a>
              /
            </div>
          </li>
        ))}
        <li className='text-sm'>
          <a
            href={crumbHref}
            aria-current='page'
            className='font-medium text-gray-500 hover:text-gray-600'
          >
            {crumbName}
          </a>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs

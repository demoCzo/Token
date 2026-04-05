import { useMemo, useState } from 'react'
import './App.css'
import { PageArea } from './components/PageArea'
import { Sidebar, type SidebarPage } from './components/Sidebar'

const WORKSPACE = 'Token'

const FAVORITES: SidebarPage[] = [
  { id: 'f1', title: 'Getting started', icon: '📘' },
  { id: 'f2', title: 'Weekly agenda', icon: '📅' },
]

const PRIVATE_PAGES: SidebarPage[] = [
  { id: 'p1', title: 'Home', icon: '🏠' },
  { id: 'p2', title: 'Project roadmap', icon: '🗺️' },
  { id: 'p3', title: 'Design notes', icon: '✏️' },
]

const TEAM_PAGES: SidebarPage[] = [
  { id: 't1', title: 'Team wiki', icon: '📚' },
  { id: 't2', title: 'Sprint board', icon: '🏃' },
]

const ALL: SidebarPage[] = [...FAVORITES, ...PRIVATE_PAGES, ...TEAM_PAGES]

function App() {
  const [selectedId, setSelectedId] = useState('p1')
  const [mobileSidebar, setMobileSidebar] = useState(false)

  const current = useMemo(() => {
    const page = ALL.find((p) => p.id === selectedId)
    return page ?? ALL[0]
  }, [selectedId])

  const breadcrumb =
    FAVORITES.some((p) => p.id === selectedId)
      ? 'Favorites'
      : TEAM_PAGES.some((p) => p.id === selectedId)
        ? 'Teamspace'
        : 'Private'

  return (
    <div className="token-app">
      <Sidebar
        workspaceName={WORKSPACE}
        favorites={FAVORITES}
        privatePages={PRIVATE_PAGES}
        teamPages={TEAM_PAGES}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id)
          setMobileSidebar(false)
        }}
        mobileOpen={mobileSidebar}
        onCloseMobile={() => setMobileSidebar(false)}
      />
      <PageArea
        title={current.title}
        icon={current.icon}
        breadcrumb={breadcrumb}
        onOpenSidebar={() => setMobileSidebar(true)}
      />
    </div>
  )
}

export default App

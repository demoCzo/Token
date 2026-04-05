import type { ReactNode } from 'react'
import {
  IconChevronDown,
  IconChevronRight,
  IconClock,
  IconPlus,
  IconSearch,
  IconStar,
} from './icons'

export type SidebarPage = {
  id: string
  title: string
  icon: string
}

type Props = {
  workspaceName: string
  favorites: SidebarPage[]
  privatePages: SidebarPage[]
  teamPages: SidebarPage[]
  selectedId: string
  onSelect: (id: string) => void
  mobileOpen: boolean
  onCloseMobile: () => void
}

function Section({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="token-sidebar__section">
      <div className="token-sidebar__section-label">{label}</div>
      <div className="token-sidebar__section-rows">{children}</div>
    </div>
  )
}

export function Sidebar({
  workspaceName,
  favorites,
  privatePages,
  teamPages,
  selectedId,
  onSelect,
  mobileOpen,
  onCloseMobile,
}: Props) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="token-sidebar__backdrop"
          aria-label="Close sidebar"
          onClick={onCloseMobile}
        />
      )}
      <aside
        className={`token-sidebar${mobileOpen ? ' token-sidebar--open' : ''}`}
        aria-label="Sidebar"
      >
        <div className="token-sidebar__inner">
          <button type="button" className="token-sidebar__workspace">
            <img
              className="token-sidebar__workspace-logo"
              src="/token-logo.svg"
              width={22}
              height={22}
              alt=""
            />
            <span className="token-sidebar__workspace-name">{workspaceName}</span>
            <IconChevronDown className="token-sidebar__workspace-chevron" />
          </button>

          <div className="token-sidebar__search-wrap">
            <button type="button" className="token-sidebar__search">
              <IconSearch />
              <span>Search</span>
            </button>
          </div>

          <div className="token-sidebar__quick">
            <button type="button" className="token-sidebar__quick-row">
              <IconClock />
              <span>All updates</span>
            </button>
            <button type="button" className="token-sidebar__quick-row">
              <IconStar />
              <span>Meetings & notes</span>
              <IconChevronRight className="token-sidebar__quick-chevron" />
            </button>
          </div>

          <Section label="Favorites">
            {favorites.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`token-sidebar__page${selectedId === p.id ? ' is-active' : ''}`}
                onClick={() => onSelect(p.id)}
              >
                <span className="token-sidebar__page-icon" aria-hidden>
                  {p.icon}
                </span>
                <span className="token-sidebar__page-title">{p.title}</span>
              </button>
            ))}
          </Section>

          <Section label="Private">
            {privatePages.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`token-sidebar__page${selectedId === p.id ? ' is-active' : ''}`}
                onClick={() => onSelect(p.id)}
              >
                <span className="token-sidebar__page-icon" aria-hidden>
                  {p.icon}
                </span>
                <span className="token-sidebar__page-title">{p.title}</span>
              </button>
            ))}
            <button type="button" className="token-sidebar__add">
              <IconPlus />
              <span>Add a page</span>
            </button>
          </Section>

          <Section label="Teamspace">
            {teamPages.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`token-sidebar__page${selectedId === p.id ? ' is-active' : ''}`}
                onClick={() => onSelect(p.id)}
              >
                <span className="token-sidebar__page-icon" aria-hidden>
                  {p.icon}
                </span>
                <span className="token-sidebar__page-title">{p.title}</span>
              </button>
            ))}
          </Section>
        </div>
      </aside>
    </>
  )
}

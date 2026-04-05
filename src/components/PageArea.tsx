import { IconDots, IconMenu, IconShare } from './icons'

type Props = {
  title: string
  icon: string
  breadcrumb: string
  onOpenSidebar: () => void
}

export function PageArea({ title, icon, breadcrumb, onOpenSidebar }: Props) {
  return (
    <main className="token-page">
      <header className="token-page__top">
        <div className="token-page__top-left">
          <button
            type="button"
            className="token-page__icon-btn token-page__icon-btn--mobile"
            aria-label="Open sidebar"
            onClick={onOpenSidebar}
          >
            <IconMenu />
          </button>
          <nav className="token-page__breadcrumb" aria-label="Breadcrumb">
            <span className="token-page__bc-muted">{breadcrumb}</span>
            <span className="token-page__bc-sep">/</span>
            <span>{title}</span>
          </nav>
        </div>
        <div className="token-page__top-actions">
          <button type="button" className="token-page__pill">
            Edited just now
          </button>
          <button type="button" className="token-page__icon-btn" aria-label="Share">
            <IconShare />
          </button>
          <button type="button" className="token-page__icon-btn" aria-label="More">
            <IconDots />
          </button>
        </div>
      </header>

      <div className="token-page__scroll">
        <div className="token-page__cover" aria-hidden />
        <article className="token-page__article">
          <div className="token-page__title-row">
            <div className="token-page__title-icon" aria-hidden>
              {icon}
            </div>
            <h1 className="token-page__title">{title}</h1>
          </div>

          <div className="token-blocks">
            <p className="token-block token-block--text">
              Welcome to your workspace. This is a static demo that mirrors Token’s document
              chrome—sidebar, breadcrumbs, and page surface.
            </p>
            <div className="token-block token-block--hint">
              Type <kbd>/</kbd> for commands, or start writing…
            </div>
            <ul className="token-block token-block--bullets">
              <li>Drag the left edge on small screens to reveal the sidebar pattern.</li>
              <li>Title and icon above behave like Token’s page header (editable in-place).</li>
            </ul>
            <div className="token-block token-block--callout">
              <span className="token-block__callout-emoji" aria-hidden>
                💡
              </span>
              <div>
                <strong>Tip:</strong> Replace this shell with your real editor blocks when you wire
                up data.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

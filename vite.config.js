import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const CATEGORY_LABELS = {
  websites: 'Website',
  games:    'Game',
  art:      'Art',
}

const CATEGORY_OVERLAY = {
  websites: 'rgba(74, 144, 217, 0.72)',
  games:    'rgba(224, 123, 84, 0.72)',
  art:      'rgba(123, 104, 200, 0.72)',
}

function renderProjectsFromData(src) {
  const projects = JSON.parse(readFileSync(resolve(__dirname, src), 'utf-8'))

  // Group projects by category, preserving first-seen order
  const groups = {}
  for (const project of projects) {
    if (!groups[project.category]) groups[project.category] = []
    groups[project.category].push(project)
  }

  const card = ({ category, title, description, icon, url, linkText, image }) => {
    const overlay = CATEGORY_OVERLAY[category]
    const bgStyle = image
      ? `style="background-image: linear-gradient(${overlay}, ${overlay}), url('${image}'); background-size: cover; background-position: center;"`
      : ''
    return `
						<div class="project-card">
							<div class="project-card-icon ${category}" ${bgStyle}>
								<i class="${icon}"></i>
							</div>
							<div class="project-card-body">
								<span class="project-tag ${category}">${CATEGORY_LABELS[category] ?? category}</span>
								<header><h3>${title}</h3></header>
								<p>${description}</p>
								<ul class="actions">
									<li><a href="${url}" class="button" target="_blank" rel="noopener">${linkText}</a></li>
								</ul>
							</div>
						</div>`
  }

  const sectionLabel = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)

  return Object.entries(groups).map(([category, items]) => `
					<!-- ${sectionLabel(category)} -->
					<h3 class="section-heading" id="${category}">${sectionLabel(category)}</h3>
					<div class="project-grid">
						${items.map(card).join('\n')}
					</div>`
  ).join('\n')
}

function htmlInclude() {
  const applyTransforms = (html) => {
    // <include src="..." />
    html = html.replace(/<include src="([^"]+)"\s*\/>/g, (_, src) =>
      readFileSync(resolve(__dirname, src), 'utf-8')
    )
    // <projects-from src="..." />
    html = html.replace(/<projects-from src="([^"]+)"\s*\/>/g, (_, src) =>
      renderProjectsFromData(src)
    )
    return html
  }

  return {
    name: 'html-include',
    transformIndexHtml: {
      order: 'pre',
      handler: applyTransforms,
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url ?? '/').split('?')[0]
        if (!url.endsWith('.html')) return next()
        try {
          const filePath = resolve(server.config.root, url.slice(1))
          let html = readFileSync(filePath, 'utf-8')
          html = applyTransforms(html)
          html = await server.transformIndexHtml(url, html)
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(html)
        } catch {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [htmlInclude()],
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        about:    resolve(__dirname, 'about_me.html'),
        resume:   resolve(__dirname, 'resume.html'),
        contact:  resolve(__dirname, 'contact.html'),
        projects: resolve(__dirname, 'projects.html'),
      },
    },
  },
})

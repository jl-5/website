import { describe, it, expect } from 'vitest'
import projects from './projects.json'

const REQUIRED_FIELDS = ['category', 'title', 'description', 'icon', 'url', 'linkText', 'image']
const VALID_CATEGORIES = ['websites', 'games', 'art']

describe('projects.json', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it.each(projects)('$title has all required fields', (project) => {
    for (const field of REQUIRED_FIELDS) {
      expect(project, `"${field}" missing from "${project.title}"`).toHaveProperty(field)
      expect(project[field], `"${field}" is empty in "${project.title}"`).toBeTruthy()
    }
  })

  it.each(projects)('$title has a valid category', (project) => {
    expect(VALID_CATEGORIES).toContain(project.category)
  })

  it.each(projects)('$title url is a valid URL', (project) => {
    expect(() => new URL(project.url)).not.toThrow()
  })

  it.each(projects)('$title image path starts with /images/', (project) => {
    expect(project.image).toMatch(/^\/images\/.+\.(png|jpg|jpeg|gif|webp|svg)$/i)
  })
})

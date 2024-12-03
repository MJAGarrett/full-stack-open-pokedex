const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('a specific pokemon\'s page can be navigated to', async ({ page }) => {
    await page.goto('/')
    await page.getByText('ivysaur').click()
    await page.waitForURL('/pokemon/ivysaur') // Wait for page to transition to some pokemon's page

    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})

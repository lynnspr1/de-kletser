import sharp from 'sharp'
import { readFileSync } from 'fs'

const dir = './public/brand_assets'

async function size(file) {
  const { size } = await import('fs').then(m => m.promises.stat(file))
  return `${(size / 1024).toFixed(0)} KB`
}

async function run() {
  console.log('Optimizing images...\n')

  // 1. Tile background: 2.4 MB PNG → WebP (massive savings)
  const bg = `${dir}/achtergrond website de kletser.png`
  await sharp(bg)
    .webp({ quality: 80, effort: 6 })
    .toFile(`${dir}/achtergrond.webp`)
  console.log(`achtergrond.png  ${await size(bg)}  →  achtergrond.webp  ${await size(`${dir}/achtergrond.webp`)}`)

  // 2. Foto Bas & Menno: resize to 900px wide + WebP + compressed JPEG fallback
  const foto = `${dir}/foto-bas-menno.jpeg`
  await sharp(foto)
    .resize(900, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`${dir}/foto-bas-menno.webp`)
  await sharp(foto)
    .resize(900, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${dir}/foto-bas-menno-opt.jpeg`)
  console.log(`foto-bas-menno.jpeg  ${await size(foto)}  →  .webp  ${await size(`${dir}/foto-bas-menno.webp`)}  |  -opt.jpeg  ${await size(`${dir}/foto-bas-menno-opt.jpeg`)}`)

  // 3. Logo wordmark: resize to 400px wide + WebP + compressed PNG fallback
  const wm = `${dir}/logo-wordmark.png`
  await sharp(wm)
    .resize(400, null, { withoutEnlargement: true })
    .webp({ quality: 90, lossless: false })
    .toFile(`${dir}/logo-wordmark.webp`)
  await sharp(wm)
    .resize(400, null, { withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: false })
    .toFile(`${dir}/logo-wordmark-opt.png`)
  console.log(`logo-wordmark.png  ${await size(wm)}  →  .webp  ${await size(`${dir}/logo-wordmark.webp`)}  |  -opt.png  ${await size(`${dir}/logo-wordmark-opt.png`)}`)

  // 4. Logo badge: resize to 192px (favicon) + compressed PNG
  const badge = `${dir}/logo-badge.png`
  await sharp(badge)
    .resize(192, 192)
    .png({ compressionLevel: 9 })
    .toFile(`${dir}/logo-badge-opt.png`)
  console.log(`logo-badge.png  ${await size(badge)}  →  logo-badge-opt.png  ${await size(`${dir}/logo-badge-opt.png`)}`)

  console.log('\nDone.')
}

run().catch(console.error)

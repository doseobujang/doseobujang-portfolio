const DEFAULT_RSS = 'https://doseobujang.tistory.com/rss'

function decodeEntities(text) {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

function stripCdata(text) {
  return text.replace(/^<!\[CDATA\[|\]\]>$/g, '').trim()
}

function stripHtml(text) {
  return text.replace(/<[^>]*>/g, ' ')
}

function getTagValue(block, tag) {
  const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'i')
  const match = block.match(regex)
  if (!match) return ''
  return match[1].trim()
}

export async function handler(event) {
  const rssUrl = event.queryStringParameters?.rss || DEFAULT_RSS

  try {
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; doseobujang-portfolio/1.0)'
          + ' AppleWebKit/537.36 (KHTML, like Gecko)'
          + ' Chrome/120.0 Safari/537.36',
        Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
      },
    })

    if (!response.ok) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: `Failed to fetch RSS (${response.status})` }),
      }
    }

    const xml = await response.text()
    const items = xml
      .split('<item>')
      .slice(1)
      .map((chunk) => chunk.split('</item>')[0])
      .map((chunk) => {
        const titleRaw = getTagValue(chunk, 'title')
        const linkRaw = getTagValue(chunk, 'link')
        const pubDateRaw = getTagValue(chunk, 'pubDate')
        const descriptionRaw = getTagValue(chunk, 'description')

        const title = decodeEntities(stripCdata(titleRaw))
        const link = stripCdata(linkRaw)
        const pubDate = stripCdata(pubDateRaw)
        const cleaned = stripCdata(descriptionRaw)
          .replace(/&lt;[^&]*?&gt;/g, ' ')
        const descriptionText = stripHtml(decodeEntities(cleaned))
          .replace(/&nbsp;|&#160;/gi, ' ')
          .replace(/\s+/g, ' ')
          .trim()
        const description = descriptionText.length > 200
          ? `${descriptionText.slice(0, 200)}…`
          : descriptionText

        return { title, link, pubDate, description }
      })
      .filter((item) => item.title && item.link)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
      },
      body: JSON.stringify({ items }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unexpected error' }),
    }
  }
}

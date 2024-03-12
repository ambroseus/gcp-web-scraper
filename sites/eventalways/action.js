function scrap() {
  const url = 'https://europe-central2-web-scraper-dev.cloudfunctions.net/web-scraper-pub'
  const service = 'https://europe-central2-web-scraper-dev.cloudfunctions.net/web-scraper-pub'
  const payload = {
    service: 'https://europe-central2-web-scraper-dev.cloudfunctions.net/web-scraper',
    payload: {
      url: 'https://www.eventalways.com/poland',
      waitForSelector: 'div.ea-event-list',
      postprocess: {
        sanitize: true,
        handler:
          "let batch=[];$('div.result-block-row').each(function(){let url=$(this).find('h3 > a').attr('href');batch.push({url})});output.batch=batch",
        onSuccess: {
          service: 'https://europe-central2-web-scraper-dev.cloudfunctions.net/web-scraper-pub',
          payload: {
            service: 'https://europe-central2-web-scraper-dev.cloudfunctions.net/web-scraper',
            payload: {
              waitForSelector: 'div.event-detail-cont',
              postprocess: {
                sanitize: true,
                handler:
                  "let title=$('h1.event-title').text().trim();let kind=$('div.event-detail-top-container div.eventtype-label').text().trim();let date=$('div.event-top-other-detail > div:nth-child(1) > span.text').text().trim();let location=$('#event-address div.ecvent-detail-address').text().trim();let description=$('div.event-description-text div.data_more_less_body').text().trim();let image=$('div.event-banner-image img').attr('src');let data={title,kind,date,location,description,image};output.data={...data,country:'Poland',status:'PARSED',url:input.url}",
                onSuccess: {
                  service: 'https://europe-central2-web-scraper-dev.cloudfunctions.net/sheet-writer',
                },
              },
            },
            limit: 20,
          },
        },
      },
    },
  }

  // Make a POST request with a JSON payload.
  const params = {
    method: 'post',
    contentType: 'application/json',
    // Convert the JavaScript object to a JSON string.
    payload: JSON.stringify({ service, payload }),
  }
  console.log(`scrap > url:`, url)
  console.log(`scrap > params:`, params)
  // UrlFetchApp.fetch(url, params)
}

export default scrap

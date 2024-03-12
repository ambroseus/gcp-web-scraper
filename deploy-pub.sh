gcloud functions deploy web-scraper-pub \
    --entry-point=pub \
    --trigger-http \
    --gen2 \
    --runtime=nodejs20 \
    --memory=512M \
    --timeout=10s \
    --region=europe-central2 \
    --source=. \
    --allow-unauthenticated
    